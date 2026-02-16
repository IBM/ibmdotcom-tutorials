'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [AccordionProvider, useAccordionContext] = createContext.createContext({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "<AccordionProvider />"
});

exports.AccordionProvider = AccordionProvider;
exports.useAccordionContext = useAccordionContext;
