"use strict";
"use client";
import { Popover } from '@ark-ui/react/popover';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withRootProvider,
  withContext,
  useStyles: useActionBarStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "actionBar" });
const ActionBarRootProvider = withRootProvider(Popover.RootProvider, {
  defaultProps: {
    lazyMount: true,
    unmountOnExit: true
  }
});
const ActionBarRoot = withRootProvider(
  Popover.Root,
  {
    defaultProps: {
      autoFocus: false,
      lazyMount: true,
      unmountOnExit: true
    }
  }
);
const ActionBarPropsProvider = PropsProvider;
const ActionBarPositioner = withContext("div", "positioner", { forwardAsChild: true });
const ActionBarContent = withContext(Popover.Content, "content", { forwardAsChild: true });
const ActionBarSeparator = withContext("div", "separator");
const ActionBarSelectionTrigger = withContext("button", "selectionTrigger");
const ActionBarCloseTrigger = withContext(Popover.CloseTrigger, "closeTrigger", { forwardAsChild: true });
const ActionBarContext = Popover.Context;

export { ActionBarCloseTrigger, ActionBarContent, ActionBarContext, ActionBarPositioner, ActionBarPropsProvider, ActionBarRoot, ActionBarRootProvider, ActionBarSelectionTrigger, ActionBarSeparator, useActionBarStyles };
