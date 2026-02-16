"use strict";
"use client";
import { useState, useCallback } from 'react';
import { useCallbackRef } from './use-callback-ref.js';

function useDisclosure(props = {}) {
  const handleOpen = useCallbackRef(props.onOpen);
  const handleClose = useCallbackRef(props.onClose);
  const [openState, setOpen] = useState(props.defaultOpen || false);
  const open = props.open !== void 0 ? props.open : openState;
  const controlled = props.open !== void 0;
  const onClose = useCallback(() => {
    if (!controlled) setOpen(false);
    handleClose?.();
  }, [controlled, handleClose]);
  const onOpen = useCallback(() => {
    if (!controlled) setOpen(true);
    handleOpen?.();
  }, [controlled, handleOpen]);
  const onToggle = useCallback(() => {
    if (open) {
      onClose();
    } else {
      onOpen();
    }
  }, [open, onOpen, onClose]);
  return {
    open,
    onOpen,
    onClose,
    onToggle,
    setOpen
  };
}

export { useDisclosure };
