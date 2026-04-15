"use strict";
"use client";
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { QuoteIcon } from '../icons.js';

const {
  withProvider,
  withContext,
  useStyles: useBlockquoteStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "blockquote" });
const BlockquoteRoot = withProvider(
  "figure",
  "root"
);
const BlockquotePropsProvider = PropsProvider;
const BlockquoteContent = withContext("blockquote", "content");
const BlockquoteCaption = withContext("figcaption", "caption");
const BlockquoteIcon = withContext(
  QuoteIcon,
  "icon"
);

export { BlockquoteCaption, BlockquoteContent, BlockquoteIcon, BlockquotePropsProvider, BlockquoteRoot, useBlockquoteStyles };
