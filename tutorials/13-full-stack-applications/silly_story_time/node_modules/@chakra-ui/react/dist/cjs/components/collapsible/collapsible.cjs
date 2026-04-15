"use strict";
"use client";
'use strict';

var collapsible = require('@ark-ui/react/collapsible');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useCollapsibleStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "collapsible" });
const CollapsibleRootProvider = withProvider(collapsible.Collapsible.RootProvider, "root", { forwardAsChild: true });
const CollapsibleRoot = withProvider(collapsible.Collapsible.Root, "root", { forwardAsChild: true });
const CollapsiblePropsProvider = PropsProvider;
const CollapsibleTrigger = withContext(collapsible.Collapsible.Trigger, "trigger", { forwardAsChild: true });
const CollapsibleContent = withContext(collapsible.Collapsible.Content, "content", { forwardAsChild: true });
const CollapsibleContext = collapsible.Collapsible.Context;

exports.CollapsibleContent = CollapsibleContent;
exports.CollapsibleContext = CollapsibleContext;
exports.CollapsiblePropsProvider = CollapsiblePropsProvider;
exports.CollapsibleRoot = CollapsibleRoot;
exports.CollapsibleRootProvider = CollapsibleRootProvider;
exports.CollapsibleTrigger = CollapsibleTrigger;
exports.useCollapsibleStyles = useCollapsibleStyles;
