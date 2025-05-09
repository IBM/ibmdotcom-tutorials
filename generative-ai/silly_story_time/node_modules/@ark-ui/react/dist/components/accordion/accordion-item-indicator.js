'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useAccordionContext } from './use-accordion-context.js';
import { useAccordionItemPropsContext } from './use-accordion-item-props-context.js';

const AccordionItemIndicator = forwardRef((props, ref) => {
  const accordion = useAccordionContext();
  const itemProps = useAccordionItemPropsContext();
  const mergedProps = mergeProps(accordion.getItemIndicatorProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
AccordionItemIndicator.displayName = "AccordionItemIndicator";

export { AccordionItemIndicator };
