"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { HoverCard } from '@ark-ui/react/hover-card';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withRootProvider,
  withContext,
  useStyles: useHoverCardStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "hoverCard" });
const HoverCardRootProvider = withRootProvider(HoverCard.RootProvider);
const HoverCardRoot = withRootProvider(
  HoverCard.Root
);
const HoverCardPropsProvider = PropsProvider;
const HoverCardTrigger = withContext(HoverCard.Trigger, "trigger", { forwardAsChild: true });
const HoverCardPositioner = withContext(HoverCard.Positioner, "positioner", { forwardAsChild: true });
const HoverCardContent = withContext(HoverCard.Content, "content", { forwardAsChild: true });
const HoverCardArrowTip = withContext(HoverCard.ArrowTip, "arrowTip", { forwardAsChild: true });
const HoverCardArrow = withContext(
  HoverCard.Arrow,
  "arrow",
  {
    forwardAsChild: true,
    defaultProps: { children: /* @__PURE__ */ jsx(HoverCardArrowTip, {}) }
  }
);
const HoverCardContext = HoverCard.Context;

export { HoverCardArrow, HoverCardArrowTip, HoverCardContent, HoverCardContext, HoverCardPositioner, HoverCardPropsProvider, HoverCardRoot, HoverCardRootProvider, HoverCardTrigger, useHoverCardStyles };
