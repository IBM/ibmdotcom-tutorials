"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Accordion } from '@ark-ui/react/accordion';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { ChevronDownIcon } from '../icons.js';

const {
  withProvider,
  withContext,
  useStyles: useAccordionStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "accordion" });
const AccordionRootProvider = withProvider(Accordion.RootProvider, "root", { forwardAsChild: true });
const AccordionRoot = withProvider(
  Accordion.Root,
  "root",
  { forwardAsChild: true }
);
const AccordionPropsProvider = PropsProvider;
const AccordionItem = withContext(
  Accordion.Item,
  "item",
  { forwardAsChild: true }
);
const AccordionItemContent = withContext(Accordion.ItemContent, "itemContent", { forwardAsChild: true });
const AccordionItemBody = withContext("div", "itemBody");
const AccordionItemTrigger = withContext(Accordion.ItemTrigger, "itemTrigger", { forwardAsChild: true });
const AccordionItemIndicator = withContext(Accordion.ItemIndicator, "itemIndicator", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsx(ChevronDownIcon, {})
  }
});
const AccordionContext = Accordion.Context;
const AccordionItemContext = Accordion.ItemContext;

export { AccordionContext, AccordionItem, AccordionItemBody, AccordionItemContent, AccordionItemContext, AccordionItemIndicator, AccordionItemTrigger, AccordionPropsProvider, AccordionRoot, AccordionRootProvider, useAccordionStyles };
