'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePopoverContext } from './use-popover-context.js';

const PopoverCloseTrigger = forwardRef((props, ref) => {
  const popover = usePopoverContext();
  const mergedProps = mergeProps(popover.getCloseTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
PopoverCloseTrigger.displayName = "PopoverCloseTrigger";

export { PopoverCloseTrigger };
