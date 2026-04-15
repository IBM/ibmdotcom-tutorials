'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useTooltipContext } from './use-tooltip-context.js';

const TooltipPositioner = forwardRef((props, ref) => {
  const tooltip = useTooltipContext();
  const mergedProps = mergeProps(tooltip.getPositionerProps(), props);
  const presence = usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TooltipPositioner.displayName = "TooltipPositioner";

export { TooltipPositioner };
