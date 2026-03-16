"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var accordion = require('@ark-ui/react/accordion');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');

const {
  withProvider,
  withContext,
  useStyles: useAccordionStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "accordion" });
const AccordionRootProvider = withProvider(accordion.Accordion.RootProvider, "root", { forwardAsChild: true });
const AccordionRoot = withProvider(
  accordion.Accordion.Root,
  "root",
  { forwardAsChild: true }
);
const AccordionPropsProvider = PropsProvider;
const AccordionItem = withContext(
  accordion.Accordion.Item,
  "item",
  { forwardAsChild: true }
);
const AccordionItemContent = withContext(accordion.Accordion.ItemContent, "itemContent", { forwardAsChild: true });
const AccordionItemBody = withContext("div", "itemBody");
const AccordionItemTrigger = withContext(accordion.Accordion.ItemTrigger, "itemTrigger", { forwardAsChild: true });
const AccordionItemIndicator = withContext(accordion.Accordion.ItemIndicator, "itemIndicator", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxRuntime.jsx(icons.ChevronDownIcon, {})
  }
});
const AccordionContext = accordion.Accordion.Context;
const AccordionItemContext = accordion.Accordion.ItemContext;

exports.AccordionContext = AccordionContext;
exports.AccordionItem = AccordionItem;
exports.AccordionItemBody = AccordionItemBody;
exports.AccordionItemContent = AccordionItemContent;
exports.AccordionItemContext = AccordionItemContext;
exports.AccordionItemIndicator = AccordionItemIndicator;
exports.AccordionItemTrigger = AccordionItemTrigger;
exports.AccordionPropsProvider = AccordionPropsProvider;
exports.AccordionRoot = AccordionRoot;
exports.AccordionRootProvider = AccordionRootProvider;
exports.useAccordionStyles = useAccordionStyles;
