"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Popover } from '@ark-ui/react/popover';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withRootProvider,
  withContext,
  useStyles: usePopoverStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "popover" });
const PopoverRootProvider = withRootProvider(
  Popover.RootProvider
);
const PopoverRoot = withRootProvider(Popover.Root);
const PopoverPropsProvider = PropsProvider;
const PopoverTrigger = withContext(Popover.Trigger, "trigger", { forwardAsChild: true });
const PopoverPositioner = withContext(Popover.Positioner, "positioner", { forwardAsChild: true });
const PopoverContent = withContext(
  Popover.Content,
  "content",
  { forwardAsChild: true }
);
const PopoverArrowTip = withContext(Popover.ArrowTip, "arrowTip", { forwardAsChild: true });
const PopoverArrow = withContext(
  Popover.Arrow,
  "arrow",
  {
    forwardAsChild: true,
    defaultProps: { children: /* @__PURE__ */ jsx(PopoverArrowTip, {}) }
  }
);
const PopoverCloseTrigger = withContext(Popover.CloseTrigger, "closeTrigger", { forwardAsChild: true });
const PopoverIndicator = withContext(Popover.Indicator, "indicator", { forwardAsChild: true });
const PopoverTitle = withContext(
  Popover.Title,
  "title",
  { forwardAsChild: true }
);
const PopoverDescription = withContext(Popover.Description, "description", { forwardAsChild: true });
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
  Popover.Anchor,
  void 0,
  { forwardAsChild: true }
);
const PopoverContext = Popover.Context;

export { PopoverAnchor, PopoverArrow, PopoverArrowTip, PopoverBody, PopoverCloseTrigger, PopoverContent, PopoverContext, PopoverDescription, PopoverFooter, PopoverHeader, PopoverIndicator, PopoverPositioner, PopoverPropsProvider, PopoverRoot, PopoverRootProvider, PopoverTitle, PopoverTrigger, usePopoverStyles };
