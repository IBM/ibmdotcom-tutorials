'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useAccordionContext = require('./use-accordion-context.cjs');

const AccordionContext = (props) => props.children(useAccordionContext.useAccordionContext());

exports.AccordionContext = AccordionContext;
