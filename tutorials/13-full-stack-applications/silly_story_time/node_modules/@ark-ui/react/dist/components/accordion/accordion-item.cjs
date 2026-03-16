'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const useAccordionContext = require('./use-accordion-context.cjs');
const useAccordionItemContext = require('./use-accordion-item-context.cjs');
const collapsibleRoot = require('../collapsible/collapsible-root.cjs');
require('@zag-js/color-picker');
require('@zag-js/date-picker');
require('@internationalized/date');
const createSplitProps = require('../../utils/create-split-props.cjs');
const renderStrategy = require('../../utils/render-strategy.cjs');
const useAccordionItemPropsContext = require('./use-accordion-item-props-context.cjs');

const AccordionItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["value", "disabled"]);
  const accordion = useAccordionContext.useAccordionContext();
  const renderStrategy$1 = renderStrategy.useRenderStrategyPropsContext();
  const mergedProps = react$1.mergeProps(accordion.getItemProps(itemProps), localProps);
  const item = accordion.getItemState(itemProps);
  const itemContentProps = accordion.getItemContentProps(itemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useAccordionItemPropsContext.AccordionItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsxRuntime.jsx(useAccordionItemContext.AccordionItemProvider, { value: item, children: /* @__PURE__ */ jsxRuntime.jsx(
    collapsibleRoot.CollapsibleRoot,
    {
      ref,
      open: item.expanded,
      ids: { content: itemContentProps.id },
      ...renderStrategy$1,
      ...mergedProps
    }
  ) }) });
});
AccordionItem.displayName = "AccordionItem";

exports.AccordionItem = AccordionItem;
