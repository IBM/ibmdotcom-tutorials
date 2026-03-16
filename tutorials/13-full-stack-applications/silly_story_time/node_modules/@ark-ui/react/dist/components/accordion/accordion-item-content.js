'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { CollapsibleContent } from '../collapsible/collapsible-content.js';
import { useAccordionContext } from './use-accordion-context.js';
import { useAccordionItemPropsContext } from './use-accordion-item-props-context.js';

const splitVisibilityProps = createSplitProps();
const AccordionItemContent = forwardRef((props, ref) => {
  const accordion = useAccordionContext();
  const itemProps = useAccordionItemPropsContext();
  const contentProps = accordion.getItemContentProps(itemProps);
  const [, itemContentProps] = splitVisibilityProps(contentProps, ["hidden", "data-state"]);
  const mergedProps = mergeProps(itemContentProps, props);
  return /* @__PURE__ */ jsx(CollapsibleContent, { ref, ...mergedProps });
});
AccordionItemContent.displayName = "AccordionItemContent";

export { AccordionItemContent };
