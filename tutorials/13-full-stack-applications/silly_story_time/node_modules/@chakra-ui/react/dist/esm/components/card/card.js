"use strict";
"use client";
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useCardStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "card" });
const CardRoot = withProvider(
  "div",
  "root"
);
const CardPropsProvider = PropsProvider;
const CardBody = withContext(
  "div",
  "body"
);
const CardHeader = withContext(
  "div",
  "header"
);
const CardFooter = withContext(
  "div",
  "footer"
);
const CardTitle = withContext(
  "h3",
  "title"
);
const CardDescription = withContext("p", "description");

export { CardBody, CardDescription, CardFooter, CardHeader, CardPropsProvider, CardRoot, CardTitle, useCardStyles };
