'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePopoverContext } from './use-popover-context.js';

const PopoverArrowTip = forwardRef((props, ref) => {
  const popover = usePopoverContext();
  const mergedProps = mergeProps(popover.getArrowTipProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
PopoverArrowTip.displayName = "PopoverArrowTip";

export { PopoverArrowTip };
