"use strict";
"use client";
'use strict';

var popover = require('@ark-ui/react/popover');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withRootProvider,
  withContext,
  useStyles: useActionBarStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "actionBar" });
const ActionBarRootProvider = withRootProvider(popover.Popover.RootProvider, {
  defaultProps: {
    lazyMount: true,
    unmountOnExit: true
  }
});
const ActionBarRoot = withRootProvider(
  popover.Popover.Root,
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
const ActionBarContent = withContext(popover.Popover.Content, "content", { forwardAsChild: true });
const ActionBarSeparator = withContext("div", "separator");
const ActionBarSelectionTrigger = withContext("button", "selectionTrigger");
const ActionBarCloseTrigger = withContext(popover.Popover.CloseTrigger, "closeTrigger", { forwardAsChild: true });
const ActionBarContext = popover.Popover.Context;

exports.ActionBarCloseTrigger = ActionBarCloseTrigger;
exports.ActionBarContent = ActionBarContent;
exports.ActionBarContext = ActionBarContext;
exports.ActionBarPositioner = ActionBarPositioner;
exports.ActionBarPropsProvider = ActionBarPropsProvider;
exports.ActionBarRoot = ActionBarRoot;
exports.ActionBarRootProvider = ActionBarRootProvider;
exports.ActionBarSelectionTrigger = ActionBarSelectionTrigger;
exports.ActionBarSeparator = ActionBarSeparator;
exports.useActionBarStyles = useActionBarStyles;
