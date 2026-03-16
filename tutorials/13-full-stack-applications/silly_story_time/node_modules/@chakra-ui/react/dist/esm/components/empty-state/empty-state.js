"use strict";
"use client";
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useEmptyStateStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "emptyState" });
const EmptyStateRoot = withProvider(
  "div",
  "root"
);
const EmptyStatePropsProvider = PropsProvider;
const EmptyStateContent = withContext("div", "content");
const EmptyStateIndicator = withContext("div", "indicator");
const EmptyStateTitle = withContext("h3", "title");
const EmptyStateDescription = withContext("p", "description");

export { EmptyStateContent, EmptyStateDescription, EmptyStateIndicator, EmptyStatePropsProvider, EmptyStateRoot, EmptyStateTitle, useEmptyStateStyles };
