"use strict";
"use client";
'use strict';

var tabs = require('@ark-ui/react/tabs');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useTabsStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "tabs" });
const TabsRootProvider = withProvider(tabs.Tabs.RootProvider, "root", { forwardAsChild: true });
const TabsRoot = withProvider(
  tabs.Tabs.Root,
  "root",
  { forwardAsChild: true }
);
const TabsPropsProvider = PropsProvider;
const TabsTrigger = withContext(
  tabs.Tabs.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const TabsContent = withContext(
  tabs.Tabs.Content,
  "content",
  { forwardAsChild: true }
);
const TabsContentGroup = withContext("div", "contentGroup");
const TabsList = withContext(
  tabs.Tabs.List,
  "list",
  { forwardAsChild: true }
);
const TabsIndicator = withContext(
  tabs.Tabs.Indicator,
  "indicator",
  { forwardAsChild: true }
);
const TabsContext = tabs.Tabs.Context;

exports.TabsContent = TabsContent;
exports.TabsContentGroup = TabsContentGroup;
exports.TabsContext = TabsContext;
exports.TabsIndicator = TabsIndicator;
exports.TabsList = TabsList;
exports.TabsPropsProvider = TabsPropsProvider;
exports.TabsRoot = TabsRoot;
exports.TabsRootProvider = TabsRootProvider;
exports.TabsTrigger = TabsTrigger;
exports.useTabsStyles = useTabsStyles;
