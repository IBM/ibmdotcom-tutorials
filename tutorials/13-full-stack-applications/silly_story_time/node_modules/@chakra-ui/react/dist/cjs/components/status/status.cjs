"use strict";
"use client";
'use strict';

var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useStatusStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "status" });
const StatusRoot = withProvider(
  "div",
  "root"
);
const StatusPropsProvider = PropsProvider;
const StatusIndicator = withContext("div", "indicator");

exports.StatusIndicator = StatusIndicator;
exports.StatusPropsProvider = StatusPropsProvider;
exports.StatusRoot = StatusRoot;
exports.useStatusStyles = useStatusStyles;
