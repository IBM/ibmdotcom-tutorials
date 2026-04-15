"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Tooltip } from '@ark-ui/react/tooltip';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withRootProvider,
  withContext,
  useStyles: useTooltipStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "tooltip" });
const TooltipRootProvider = withRootProvider(
  Tooltip.RootProvider
);
const TooltipRoot = withRootProvider(Tooltip.Root, {
  defaultProps: { lazyMount: true, unmountOnExit: true }
});
const TooltipPropsProvider = PropsProvider;
const TooltipTrigger = withContext(Tooltip.Trigger, "trigger", { forwardAsChild: true });
const TooltipPositioner = withContext(Tooltip.Positioner, "positioner", { forwardAsChild: true });
const TooltipContent = withContext(
  Tooltip.Content,
  "content",
  { forwardAsChild: true }
);
const TooltipArrowTip = withContext(Tooltip.ArrowTip, "arrowTip", { forwardAsChild: true });
const TooltipArrow = withContext(
  Tooltip.Arrow,
  "arrow",
  { forwardAsChild: true, defaultProps: { children: /* @__PURE__ */ jsx(TooltipArrowTip, {}) } }
);
const TooltipContext = Tooltip.Context;

export { TooltipArrow, TooltipArrowTip, TooltipContent, TooltipContext, TooltipPositioner, TooltipPropsProvider, TooltipRoot, TooltipRootProvider, TooltipTrigger, useTooltipStyles };
