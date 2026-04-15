"use strict";
"use client";
'use strict';

var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useDataListStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "dataList" });
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

exports.DataListItem = DataListItem;
exports.DataListItemLabel = DataListItemLabel;
exports.DataListItemValue = DataListItemValue;
exports.DataListPropsProvider = DataListPropsProvider;
exports.DataListRoot = DataListRoot;
exports.useDataListStyles = useDataListStyles;
