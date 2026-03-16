"use strict";
"use client";
'use strict';

var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');

const {
  withProvider,
  withContext,
  useStyles: useBlockquoteStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "blockquote" });
const BlockquoteRoot = withProvider(
  "figure",
  "root"
);
const BlockquotePropsProvider = PropsProvider;
const BlockquoteContent = withContext("blockquote", "content");
const BlockquoteCaption = withContext("figcaption", "caption");
const BlockquoteIcon = withContext(
  icons.QuoteIcon,
  "icon"
);

exports.BlockquoteCaption = BlockquoteCaption;
exports.BlockquoteContent = BlockquoteContent;
exports.BlockquoteIcon = BlockquoteIcon;
exports.BlockquotePropsProvider = BlockquotePropsProvider;
exports.BlockquoteRoot = BlockquoteRoot;
exports.useBlockquoteStyles = useBlockquoteStyles;
