'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [AccordionItemProvider, useAccordionItemContext] = createContext.createContext({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItemProvider />"
});

exports.AccordionItemProvider = AccordionItemProvider;
exports.useAccordionItemContext = useAccordionItemContext;
