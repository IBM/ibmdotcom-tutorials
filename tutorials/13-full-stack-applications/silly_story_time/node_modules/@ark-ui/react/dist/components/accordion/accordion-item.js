'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { useAccordionContext } from './use-accordion-context.js';
import { AccordionItemProvider } from './use-accordion-item-context.js';
import { CollapsibleRoot } from '../collapsible/collapsible-root.js';
import '@zag-js/color-picker';
import '@zag-js/date-picker';
import '@internationalized/date';
import { createSplitProps } from '../../utils/create-split-props.js';
import { useRenderStrategyPropsContext } from '../../utils/render-strategy.js';
import { AccordionItemPropsProvider } from './use-accordion-item-props-context.js';

const AccordionItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["value", "disabled"]);
  const accordion = useAccordionContext();
  const renderStrategy = useRenderStrategyPropsContext();
  const mergedProps = mergeProps(accordion.getItemProps(itemProps), localProps);
  const item = accordion.getItemState(itemProps);
  const itemContentProps = accordion.getItemContentProps(itemProps);
  return /* @__PURE__ */ jsx(AccordionItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsx(AccordionItemProvider, { value: item, children: /* @__PURE__ */ jsx(
    CollapsibleRoot,
    {
      ref,
      open: item.expanded,
      ids: { content: itemContentProps.id },
      ...renderStrategy,
      ...mergedProps
    }
  ) }) });
});
AccordionItem.displayName = "AccordionItem";

export { AccordionItem };
