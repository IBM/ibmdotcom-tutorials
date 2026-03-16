"use strict";
"use client";
'use strict';

var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useCardStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "card" });
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

exports.CardBody = CardBody;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardPropsProvider = CardPropsProvider;
exports.CardRoot = CardRoot;
exports.CardTitle = CardTitle;
exports.useCardStyles = useCardStyles;
