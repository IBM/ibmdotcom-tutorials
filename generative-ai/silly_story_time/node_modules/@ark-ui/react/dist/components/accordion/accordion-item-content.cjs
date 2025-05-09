'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const collapsibleContent = require('../collapsible/collapsible-content.cjs');
const useAccordionContext = require('./use-accordion-context.cjs');
const useAccordionItemPropsContext = require('./use-accordion-item-props-context.cjs');

const splitVisibilityProps = createSplitProps.createSplitProps();
const AccordionItemContent = react.forwardRef((props, ref) => {
  const accordion = useAccordionContext.useAccordionContext();
  const itemProps = useAccordionItemPropsContext.useAccordionItemPropsContext();
  const contentProps = accordion.getItemContentProps(itemProps);
  const [, itemContentProps] = splitVisibilityProps(contentProps, ["hidden", "data-state"]);
  const mergedProps = react$1.mergeProps(itemContentProps, props);
  return /* @__PURE__ */ jsxRuntime.jsx(collapsibleContent.CollapsibleContent, { ref, ...mergedProps });
});
AccordionItemContent.displayName = "AccordionItemContent";

exports.AccordionItemContent = AccordionItemContent;
