'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useFloatingPanelContext } from './use-floating-panel-context.js';

const FloatingPanelContent = forwardRef((props, ref) => {
  const floatingPanel = useFloatingPanelContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(floatingPanel.getContentProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref: composeRefs(presence.ref, ref) });
});
FloatingPanelContent.displayName = "FloatingPanelContent";

export { FloatingPanelContent };
