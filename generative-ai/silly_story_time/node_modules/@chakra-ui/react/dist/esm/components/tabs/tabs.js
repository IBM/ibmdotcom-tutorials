"use strict";
"use client";
import { Tabs } from '@ark-ui/react/tabs';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useTabsStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "tabs" });
const TabsRootProvider = withProvider(Tabs.RootProvider, "root", { forwardAsChild: true });
const TabsRoot = withProvider(
  Tabs.Root,
  "root",
  { forwardAsChild: true }
);
const TabsPropsProvider = PropsProvider;
const TabsTrigger = withContext(
  Tabs.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const TabsContent = withContext(
  Tabs.Content,
  "content",
  { forwardAsChild: true }
);
const TabsContentGroup = withContext("div", "contentGroup");
const TabsList = withContext(
  Tabs.List,
  "list",
  { forwardAsChild: true }
);
const TabsIndicator = withContext(
  Tabs.Indicator,
  "indicator",
  { forwardAsChild: true }
);
const TabsContext = Tabs.Context;

export { TabsContent, TabsContentGroup, TabsContext, TabsIndicator, TabsList, TabsPropsProvider, TabsRoot, TabsRootProvider, TabsTrigger, useTabsStyles };
