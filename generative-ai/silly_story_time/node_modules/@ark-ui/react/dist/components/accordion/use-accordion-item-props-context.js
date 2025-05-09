'use client';
import { createContext } from '../../utils/create-context.js';

const [AccordionItemPropsProvider, useAccordionItemPropsContext] = createContext({
  name: "AccordionItemPropsContext",
  hookName: "useAccordionItemPropsContext",
  providerName: "<AccordionItemPropsProvider />"
});

export { AccordionItemPropsProvider, useAccordionItemPropsContext };
