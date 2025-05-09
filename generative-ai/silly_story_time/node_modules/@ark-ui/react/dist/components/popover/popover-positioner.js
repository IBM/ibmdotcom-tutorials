'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { usePopoverContext } from './use-popover-context.js';

const PopoverPositioner = forwardRef((props, ref) => {
  const popover = usePopoverContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(popover.getPositionerProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
PopoverPositioner.displayName = "PopoverPositioner";

export { PopoverPositioner };
