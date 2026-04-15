'use client';
import { useAccordionContext } from './use-accordion-context.js';

const AccordionContext = (props) => props.children(useAccordionContext());

export { AccordionContext };
