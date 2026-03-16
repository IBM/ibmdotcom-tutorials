"use strict";
"use client";
'use strict';

var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useEmptyStateStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "emptyState" });
const EmptyStateRoot = withProvider(
  "div",
  "root"
);
const EmptyStatePropsProvider = PropsProvider;
const EmptyStateContent = withContext("div", "content");
const EmptyStateIndicator = withContext("div", "indicator");
const EmptyStateTitle = withContext("h3", "title");
const EmptyStateDescription = withContext("p", "description");

exports.EmptyStateContent = EmptyStateContent;
exports.EmptyStateDescription = EmptyStateDescription;
exports.EmptyStateIndicator = EmptyStateIndicator;
exports.EmptyStatePropsProvider = EmptyStatePropsProvider;
exports.EmptyStateRoot = EmptyStateRoot;
exports.EmptyStateTitle = EmptyStateTitle;
exports.useEmptyStateStyles = useEmptyStateStyles;
