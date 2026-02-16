'use client';
import { createContext } from '../../utils/create-context.js';

const [AccordionItemProvider, useAccordionItemContext] = createContext({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItemProvider />"
});

export { AccordionItemProvider, useAccordionItemContext };
