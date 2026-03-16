"""
SecureToolWrapper: A wrapper for beeai tools that enforces user permission checks before execution.

"""

from __future__ import annotations

import asyncio
import time
import inspect
from typing import Any, Optional, Callable
from datetime import datetime
from beeai_framework.tools import Tool


class AuditLogger:
    """Simple audit logger for each tool execution event."""
    
    def __init__(self, log_file: Optional[str] = None) -> None:
        self.log_file = log_file or "tool_audit.log"
    
    def log(self, event: str, tool_name: str, allowed: bool, details: str = "") -> None:
        timestamp = datetime.now().isoformat()
        status = "ALLOWED" if allowed else "BLOCKED"
        message = f"[{timestamp}] {status} | Tool: {tool_name} | Event: {event}"
        if details:
            message += f" | Details: {details}"
        
        print(message)
        try:
            with open(self.log_file, "a") as f:
                f.write(message + "\n")
        except Exception as e:
            print(f"[WARNING] Failed to write audit log: {e}")


class PermissionManager:
    """Role-based permission manager for tools.

    Tracks which tools are allowed/denied per user role

    """

    def __init__(self, audit_logger: Optional[AuditLogger] = None) -> None:
        self._perms: dict[str, bool] = {}
        self.audit_logger = audit_logger or AuditLogger()
        # Track failure counts and temporary disables to avoid retry loops
        self._fail_counts: dict[str, int] = {}
        self._disabled_until: dict[str, float] = {}

    def has(self, tool_name: str) -> bool:
        """Check if tool access is already granted."""
        return bool(self._perms.get(tool_name, False))

    def grant(self, tool_name: str) -> None:
        """Grant permission to use a tool."""
        self._perms[tool_name] = True
        self.audit_logger.log("PERMISSION_GRANTED", tool_name, True)

    def revoke(self, tool_name: str) -> None:
        """Revoke permission to use a tool."""
        self._perms[tool_name] = False
        self.audit_logger.log("PERMISSION_REVOKED", tool_name, False)

    async def request_permission(self, tool_name: str) -> bool:
        """Interactively prompt user to grant permission.
        
        Runs in a thread to avoid blocking async code.
        """
        # If tool is temporarily disabled due to repeated failures, deny without prompting
        if self.is_disabled(tool_name):
            self.audit_logger.log(
                "ACCESS_DENIED",
                tool_name,
                False,
                "temporarily_disabled_due_to_failures"
            )
            return False

        if self.has(tool_name):
            return True

        loop = asyncio.get_event_loop()

        def _prompt() -> bool:
            resp = input(f"\n  Tool '{tool_name}' wants to execute. Allow? [y/N]: ").strip().lower()
            return resp in ("y", "yes")

        granted = await loop.run_in_executor(None, _prompt)
        if granted:
            self.grant(tool_name)
            print(f" Permission APPROVED for '{tool_name}'")
        else:
            self.revoke(tool_name)
            print(f" Permission DENIED for '{tool_name}'")
        return granted

    def is_disabled(self, tool_name: str) -> bool:
        """Return True if a tool is temporarily disabled (cooldown not expired)."""
        until = self._disabled_until.get(tool_name)
        if until is None:
            return False
        if time.time() < until:
            return True
        # cooldown expired
        del self._disabled_until[tool_name]
        self._fail_counts.pop(tool_name, None)
        return False

    def record_failure(self, tool_name: str, threshold: int = 3, cooldown_seconds: int = 60) -> bool:
        """Record a failure for a tool. If failures exceed `threshold`, disable tool for `cooldown_seconds`.

        Returns True if the tool was disabled by this call.
        """
        cnt = self._fail_counts.get(tool_name, 0) + 1
        self._fail_counts[tool_name] = cnt
        self.audit_logger.log("TOOL_FAILURE_RECORDED", tool_name, False, f"count={cnt}")
        if cnt >= threshold:
            # disable tool temporarily and revoke permission
            self._disabled_until[tool_name] = time.time() + float(cooldown_seconds)
            self._perms[tool_name] = False
            self.audit_logger.log("TOOL_TEMP_DISABLED", tool_name, False, f"failures={cnt},cooldown={cooldown_seconds}s")
            return True
        return False


class SecureToolWrapper(Tool):
    """Wraps a beeai tool and enforces permission checks + audit logging.
        Raises PermissionError if user denies access.
    """

    def __init__(
        self,
        tool: Any,
        permission_manager: Optional[PermissionManager] = None,
        *,
        prompt: bool = True,
        name: Optional[str] = None,
    ) -> None:
        self.tool = tool
        self.permission_manager = permission_manager or PermissionManager()
        self.prompt = prompt
        self._tool_name = name or getattr(tool, "name", None) or tool.__class__.__name__
        self._tool_description = getattr(tool, "description", f"Secure wrapper for {self._tool_name}")
        # Call parent Tool.__init__() without arguments
        super().__init__()

    @property
    def name(self) -> str:
        """Tool name for permission checking."""
        return self._tool_name

    @property
    def description(self) -> str:
        """Delegate to wrapped tool's description."""
        return self._tool_description

    @property
    def input_schema(self) -> Any:
        """Delegate to wrapped tool's input schema."""
        return getattr(self.tool, "input_schema", None)

    def _create_emitter(self) -> Any:
        """Create emitter for tool events."""
        # Delegate to wrapped tool if it has emitter creation
        if hasattr(self.tool, "_create_emitter"):
            return self.tool._create_emitter()
        # Fall back to parent's implementation
        return super()._create_emitter()

    async def _ensure_permission(self) -> None:
        """Check or request permission before execution."""
        # If tool is temporarily disabled due to repeated failures, block execution
        if self.permission_manager.is_disabled(self.name):
            self.permission_manager.audit_logger.log(
                "ACCESS_DENIED",
                self.name,
                False,
                "temporarily_disabled_due_to_failures"
            )
            raise PermissionError(f"Tool '{self.name}' is temporarily disabled due to repeated failures")

        if self.permission_manager.has(self.name):
            return

        if not self.prompt:
            self.permission_manager.audit_logger.log(
                "ACCESS_DENIED",
                self.name,
                False,
                "prompt=False"
            )
            raise PermissionError(f"Permission denied for tool '{self.name}'")

        allowed = await self.permission_manager.request_permission(self.name)
        if not allowed:
            self.permission_manager.audit_logger.log(
                "ACCESS_DENIED",
                self.name,
                False,
                "user_rejected"
            )
            raise PermissionError(f"User denied permission for tool '{self.name}'")

    async def _run(self, *args: Any, **kwargs: Any) -> Any:
        """Execute tool with permission check and audit logging."""
        await self._ensure_permission()

        self.permission_manager.audit_logger.log(
            "TOOL_EXECUTION_START",
            self.name,
            True,
            f"args={len(args)}, kwargs={list(kwargs.keys())}"
        )

        try:
            # Try to call wrapped tool's _run method (if it's a Tool)
            if hasattr(self.tool, "_run"):
                target_run = self.tool._run
            else:
                target_run = getattr(self.tool, "run", None) or self.tool
            
            if inspect.iscoroutinefunction(target_run):
                result = await target_run(*args, **kwargs)
            elif callable(target_run):
                result = target_run(*args, **kwargs)
                if inspect.isawaitable(result):
                    result = await result
            else:
                raise TypeError(f"Tool '{self.name}' is not callable")

            self.permission_manager.audit_logger.log(
                "TOOL_EXECUTION_SUCCESS",
                self.name,
                True
            )
            return result

        except Exception as e:
            # Log the execution error
            self.permission_manager.audit_logger.log(
                "TOOL_EXECUTION_ERROR",
                self.name,
                False,
                f"error={type(e).__name__}: {str(e)[:100]}"
            )

            try:
                # Record the failure; if this disables the tool, raise PermissionError to stop retries
                disabled = self.permission_manager.record_failure(self.name)
                if disabled:
                    raise PermissionError(f"Tool '{self.name}' disabled after repeated failures")
            except Exception:
                # If failure recording itself errors, just re-raise original
                pass

            # Re-raise original exception when not disabled so caller can handle it
            raise


def wrap_tools(
    tools: list[Any],
    permission_manager: Optional[PermissionManager] = None,
    *,
    prompt: bool = True,
) -> list[SecureToolWrapper]:
    """Wrap a list of tools with secure permission checking.
    
    Args:
        tools: List of beeai tools to wrap
        permission_manager: Shared PermissionManager instance
        prompt: Whether to prompt user for permission on first use
    
    Returns:
        List of SecureToolWrapper instances
    """
    pm = permission_manager or PermissionManager()
    return [SecureToolWrapper(t, permission_manager=pm, prompt=prompt) for t in tools]

