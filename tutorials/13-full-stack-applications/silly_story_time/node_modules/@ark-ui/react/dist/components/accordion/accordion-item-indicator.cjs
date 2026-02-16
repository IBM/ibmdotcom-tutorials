'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useAccordionContext = require('./use-accordion-context.cjs');
const useAccordionItemPropsContext = require('./use-accordion-item-props-context.cjs');

const AccordionItemIndicator = react.forwardRef((props, ref) => {
  const accordion = useAccordionContext.useAccordionContext();
  const itemProps = useAccordionItemPropsContext.useAccordionItemPropsContext();
  const mergedProps = react$1.mergeProps(accordion.getItemIndicatorProps(itemProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
AccordionItemIndicator.displayName = "AccordionItemIndicator";

exports.AccordionItemIndicator = AccordionItemIndicator;
