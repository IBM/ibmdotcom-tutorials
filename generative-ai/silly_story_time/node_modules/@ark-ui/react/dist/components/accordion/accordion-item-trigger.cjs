'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const useCollapsibleContext = require('../collapsible/use-collapsible-context.cjs');
const factory = require('../factory.cjs');
const useAccordionContext = require('./use-accordion-context.cjs');
const useAccordionItemPropsContext = require('./use-accordion-item-props-context.cjs');

const AccordionItemTrigger = react.forwardRef((props, ref) => {
  const accordion = useAccordionContext.useAccordionContext();
  const itemProps = useAccordionItemPropsContext.useAccordionItemPropsContext();
  const collapsible = useCollapsibleContext.useCollapsibleContext();
  const triggerProps = accordion.getItemTriggerProps(itemProps);
  const mergedProps = react$1.mergeProps(
    {
      ...triggerProps,
      "aria-controls": collapsible.isUnmounted ? void 0 : triggerProps["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
AccordionItemTrigger.displayName = "AccordionItemTrigger";

exports.AccordionItemTrigger = AccordionItemTrigger;
