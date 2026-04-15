"use strict";
"use client";
'use strict';

var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useListStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "list" });
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

exports.ListIndicator = ListIndicator;
exports.ListItem = ListItem;
exports.ListRoot = ListRoot;
exports.ListRootPropsProvider = ListRootPropsProvider;
exports.useListStyles = useListStyles;
