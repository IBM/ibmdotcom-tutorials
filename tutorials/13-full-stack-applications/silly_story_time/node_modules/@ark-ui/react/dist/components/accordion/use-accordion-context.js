'use client';
import { createContext } from '../../utils/create-context.js';

const [AccordionProvider, useAccordionContext] = createContext({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "<AccordionProvider />"
});

export { AccordionProvider, useAccordionContext };
