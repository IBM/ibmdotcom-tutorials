'use client';
import { useAccordionItemContext } from './use-accordion-item-context.js';

const AccordionItemContext = (props) => props.children(useAccordionItemContext());

export { AccordionItemContext };
