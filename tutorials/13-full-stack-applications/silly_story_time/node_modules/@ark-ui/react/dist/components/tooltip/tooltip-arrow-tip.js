'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTooltipContext } from './use-tooltip-context.js';

const TooltipArrowTip = forwardRef((props, ref) => {
  const tooltip = useTooltipContext();
  const mergedProps = mergeProps(tooltip.getArrowTipProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TooltipArrowTip.displayName = "TooltipArrowTip";

export { TooltipArrowTip };
