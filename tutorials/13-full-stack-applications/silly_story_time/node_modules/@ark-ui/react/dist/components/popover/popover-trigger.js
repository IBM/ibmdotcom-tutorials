'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { usePopoverContext } from './use-popover-context.js';

const PopoverTrigger = forwardRef((props, ref) => {
  const popover = usePopoverContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(
    {
      ...popover.getTriggerProps(),
      "aria-controls": presence.unmounted ? void 0 : popover.getTriggerProps()["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
PopoverTrigger.displayName = "PopoverTrigger";

export { PopoverTrigger };
