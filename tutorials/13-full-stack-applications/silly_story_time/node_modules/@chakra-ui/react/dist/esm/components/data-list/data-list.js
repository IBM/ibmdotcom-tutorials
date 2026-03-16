"use strict";
"use client";
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useDataListStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "dataList" });
const DataListRoot = withProvider(
  "dl",
  "root"
);
const DataListPropsProvider = PropsProvider;
const DataListItem = withContext(
  "div",
  "item"
);
const DataListItemLabel = withContext("dt", "itemLabel");
const DataListItemValue = withContext("dd", "itemValue");

export { DataListItem, DataListItemLabel, DataListItemValue, DataListPropsProvider, DataListRoot, useDataListStyles };
