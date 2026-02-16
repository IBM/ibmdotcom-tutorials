'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useFloatingPanelContext } from './use-floating-panel-context.js';

const FloatingPanelTrigger = forwardRef((props, ref) => {
  const floatingPanel = useFloatingPanelContext();
  const presence = usePresenceContext();
  const triggerProps = floatingPanel.getTriggerProps();
  const mergedProps = mergeProps(
    {
      ...triggerProps,
      "aria-controls": presence.unmounted ? void 0 : triggerProps["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
FloatingPanelTrigger.displayName = "FloatingPanelTrigger";

export { FloatingPanelTrigger };
