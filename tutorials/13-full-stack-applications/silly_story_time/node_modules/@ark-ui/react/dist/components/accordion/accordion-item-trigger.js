'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { useCollapsibleContext } from '../collapsible/use-collapsible-context.js';
import { ark } from '../factory.js';
import { useAccordionContext } from './use-accordion-context.js';
import { useAccordionItemPropsContext } from './use-accordion-item-props-context.js';

const AccordionItemTrigger = forwardRef((props, ref) => {
  const accordion = useAccordionContext();
  const itemProps = useAccordionItemPropsContext();
  const collapsible = useCollapsibleContext();
  const triggerProps = accordion.getItemTriggerProps(itemProps);
  const mergedProps = mergeProps(
    {
      ...triggerProps,
      "aria-controls": collapsible.isUnmounted ? void 0 : triggerProps["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
AccordionItemTrigger.displayName = "AccordionItemTrigger";

export { AccordionItemTrigger };
