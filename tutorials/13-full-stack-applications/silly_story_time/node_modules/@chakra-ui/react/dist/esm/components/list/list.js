"use strict";
"use client";
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useListStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "list" });
const ListRoot = withProvider(
  "ul",
  "root",
  { defaultProps: { role: "list" } }
);
const ListRootPropsProvider = PropsProvider;
const ListItem = withContext("li", "item");
const ListIndicator = withContext(
  "span",
  "indicator"
);

export { ListIndicator, ListItem, ListRoot, ListRootPropsProvider, useListStyles };
