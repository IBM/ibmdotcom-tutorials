'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTooltipContext } from './use-tooltip-context.js';

const TooltipTrigger = forwardRef((props, ref) => {
  const tooltip = useTooltipContext();
  const mergedProps = mergeProps(tooltip.getTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
TooltipTrigger.displayName = "TooltipTrigger";

export { TooltipTrigger };
