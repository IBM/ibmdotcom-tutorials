"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tooltip = require('@ark-ui/react/tooltip');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withRootProvider,
  withContext,
  useStyles: useTooltipStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "tooltip" });
const TooltipRootProvider = withRootProvider(
  tooltip.Tooltip.RootProvider
);
const TooltipRoot = withRootProvider(tooltip.Tooltip.Root, {
  defaultProps: { lazyMount: true, unmountOnExit: true }
});
const TooltipPropsProvider = PropsProvider;
const TooltipTrigger = withContext(tooltip.Tooltip.Trigger, "trigger", { forwardAsChild: true });
const TooltipPositioner = withContext(tooltip.Tooltip.Positioner, "positioner", { forwardAsChild: true });
const TooltipContent = withContext(
  tooltip.Tooltip.Content,
  "content",
  { forwardAsChild: true }
);
const TooltipArrowTip = withContext(tooltip.Tooltip.ArrowTip, "arrowTip", { forwardAsChild: true });
const TooltipArrow = withContext(
  tooltip.Tooltip.Arrow,
  "arrow",
  { forwardAsChild: true, defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(TooltipArrowTip, {}) } }
);
const TooltipContext = tooltip.Tooltip.Context;

exports.TooltipArrow = TooltipArrow;
exports.TooltipArrowTip = TooltipArrowTip;
exports.TooltipContent = TooltipContent;
exports.TooltipContext = TooltipContext;
exports.TooltipPositioner = TooltipPositioner;
exports.TooltipPropsProvider = TooltipPropsProvider;
exports.TooltipRoot = TooltipRoot;
exports.TooltipRootProvider = TooltipRootProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.useTooltipStyles = useTooltipStyles;
