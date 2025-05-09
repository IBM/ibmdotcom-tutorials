'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePopoverContext } from './use-popover-context.js';

const PopoverAnchor = forwardRef((props, ref) => {
  const popover = usePopoverContext();
  const mergedProps = mergeProps(popover.getAnchorProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
PopoverAnchor.displayName = "PopoverAnchor";

export { PopoverAnchor };
