"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { CloseIcon } from '../icons.js';

const {
  withProvider,
  withContext,
  useStyles: useTagStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "tag" });
const TagRoot = withProvider(
  "div",
  "root"
);
const TagRootPropsProvider = PropsProvider;
const TagLabel = withContext(
  "span",
  "label"
);
const TagCloseTrigger = withContext("button", "closeTrigger", { defaultProps: { children: /* @__PURE__ */ jsx(CloseIcon, {}) } });
const TagStartElement = withContext("span", "startElement");
const TagEndElement = withContext(
  "span",
  "endElement"
);

export { TagCloseTrigger, TagEndElement, TagLabel, TagRoot, TagRootPropsProvider, TagStartElement, useTagStyles };
