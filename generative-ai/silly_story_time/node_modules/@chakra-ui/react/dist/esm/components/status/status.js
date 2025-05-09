"use strict";
"use client";
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useStatusStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "status" });
const StatusRoot = withProvider(
  "div",
  "root"
);
const StatusPropsProvider = PropsProvider;
const StatusIndicator = withContext("div", "indicator");

export { StatusIndicator, StatusPropsProvider, StatusRoot, useStatusStyles };
