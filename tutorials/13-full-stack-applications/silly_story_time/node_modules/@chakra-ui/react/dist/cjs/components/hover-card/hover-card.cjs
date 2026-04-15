"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hoverCard = require('@ark-ui/react/hover-card');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withRootProvider,
  withContext,
  useStyles: useHoverCardStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "hoverCard" });
const HoverCardRootProvider = withRootProvider(hoverCard.HoverCard.RootProvider);
const HoverCardRoot = withRootProvider(
  hoverCard.HoverCard.Root
);
const HoverCardPropsProvider = PropsProvider;
const HoverCardTrigger = withContext(hoverCard.HoverCard.Trigger, "trigger", { forwardAsChild: true });
const HoverCardPositioner = withContext(hoverCard.HoverCard.Positioner, "positioner", { forwardAsChild: true });
const HoverCardContent = withContext(hoverCard.HoverCard.Content, "content", { forwardAsChild: true });
const HoverCardArrowTip = withContext(hoverCard.HoverCard.ArrowTip, "arrowTip", { forwardAsChild: true });
const HoverCardArrow = withContext(
  hoverCard.HoverCard.Arrow,
  "arrow",
  {
    forwardAsChild: true,
    defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(HoverCardArrowTip, {}) }
  }
);
const HoverCardContext = hoverCard.HoverCard.Context;

exports.HoverCardArrow = HoverCardArrow;
exports.HoverCardArrowTip = HoverCardArrowTip;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardContext = HoverCardContext;
exports.HoverCardPositioner = HoverCardPositioner;
exports.HoverCardPropsProvider = HoverCardPropsProvider;
exports.HoverCardRoot = HoverCardRoot;
exports.HoverCardRootProvider = HoverCardRootProvider;
exports.HoverCardTrigger = HoverCardTrigger;
exports.useHoverCardStyles = useHoverCardStyles;
