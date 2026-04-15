"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var popover = require('@ark-ui/react/popover');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withRootProvider,
  withContext,
  useStyles: usePopoverStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "popover" });
const PopoverRootProvider = withRootProvider(
  popover.Popover.RootProvider
);
const PopoverRoot = withRootProvider(popover.Popover.Root);
const PopoverPropsProvider = PropsProvider;
const PopoverTrigger = withContext(popover.Popover.Trigger, "trigger", { forwardAsChild: true });
const PopoverPositioner = withContext(popover.Popover.Positioner, "positioner", { forwardAsChild: true });
const PopoverContent = withContext(
  popover.Popover.Content,
  "content",
  { forwardAsChild: true }
);
const PopoverArrowTip = withContext(popover.Popover.ArrowTip, "arrowTip", { forwardAsChild: true });
const PopoverArrow = withContext(
  popover.Popover.Arrow,
  "arrow",
  {
    forwardAsChild: true,
    defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(PopoverArrowTip, {}) }
  }
);
const PopoverCloseTrigger = withContext(popover.Popover.CloseTrigger, "closeTrigger", { forwardAsChild: true });
const PopoverIndicator = withContext(popover.Popover.Indicator, "indicator", { forwardAsChild: true });
const PopoverTitle = withContext(
  popover.Popover.Title,
  "title",
  { forwardAsChild: true }
);
const PopoverDescription = withContext(popover.Popover.Description, "description", { forwardAsChild: true });
const PopoverFooter = withContext(
  "footer",
  "footer"
);
const PopoverHeader = withContext(
  "header",
  "header"
);
const PopoverBody = withContext(
  "div",
  "body"
);
const PopoverAnchor = withContext(
  popover.Popover.Anchor,
  void 0,
  { forwardAsChild: true }
);
const PopoverContext = popover.Popover.Context;

exports.PopoverAnchor = PopoverAnchor;
exports.PopoverArrow = PopoverArrow;
exports.PopoverArrowTip = PopoverArrowTip;
exports.PopoverBody = PopoverBody;
exports.PopoverCloseTrigger = PopoverCloseTrigger;
exports.PopoverContent = PopoverContent;
exports.PopoverContext = PopoverContext;
exports.PopoverDescription = PopoverDescription;
exports.PopoverFooter = PopoverFooter;
exports.PopoverHeader = PopoverHeader;
exports.PopoverIndicator = PopoverIndicator;
exports.PopoverPositioner = PopoverPositioner;
exports.PopoverPropsProvider = PopoverPropsProvider;
exports.PopoverRoot = PopoverRoot;
exports.PopoverRootProvider = PopoverRootProvider;
exports.PopoverTitle = PopoverTitle;
exports.PopoverTrigger = PopoverTrigger;
exports.usePopoverStyles = usePopoverStyles;
