'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useFloatingPanelContext } from './use-floating-panel-context.js';

const FloatingPanelPositioner = forwardRef((props, ref) => {
  const floatingPanel = useFloatingPanelContext();
  const mergedProps = mergeProps(floatingPanel.getPositionerProps(), props);
  const presence = usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
FloatingPanelPositioner.displayName = "FloatingPanelPositioner";

export { FloatingPanelPositioner };
