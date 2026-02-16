'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [AccordionItemPropsProvider, useAccordionItemPropsContext] = createContext.createContext({
  name: "AccordionItemPropsContext",
  hookName: "useAccordionItemPropsContext",
  providerName: "<AccordionItemPropsProvider />"
});

exports.AccordionItemPropsProvider = AccordionItemPropsProvider;
exports.useAccordionItemPropsContext = useAccordionItemPropsContext;
