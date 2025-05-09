'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useAccordionItemContext = require('./use-accordion-item-context.cjs');

const AccordionItemContext = (props) => props.children(useAccordionItemContext.useAccordionItemContext());

exports.AccordionItemContext = AccordionItemContext;
