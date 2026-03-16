"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');

const {
  withProvider,
  withContext,
  useStyles: useTagStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "tag" });
const TagRoot = withProvider(
  "div",
  "root"
);
const TagRootPropsProvider = PropsProvider;
const TagLabel = withContext(
  "span",
  "label"
);
const TagCloseTrigger = withContext("button", "closeTrigger", { defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(icons.CloseIcon, {}) } });
const TagStartElement = withContext("span", "startElement");
const TagEndElement = withContext(
  "span",
  "endElement"
);

exports.TagCloseTrigger = TagCloseTrigger;
exports.TagEndElement = TagEndElement;
exports.TagLabel = TagLabel;
exports.TagRoot = TagRoot;
exports.TagRootPropsProvider = TagRootPropsProvider;
exports.TagStartElement = TagStartElement;
exports.useTagStyles = useTagStyles;
