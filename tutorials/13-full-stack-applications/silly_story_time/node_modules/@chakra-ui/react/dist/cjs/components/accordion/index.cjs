"use strict";
'use strict';

var accordion = require('./accordion.cjs');
var accordion$1 = require('@ark-ui/react/accordion');
var namespace = require('./namespace.cjs');



exports.AccordionContext = accordion.AccordionContext;
exports.AccordionItem = accordion.AccordionItem;
exports.AccordionItemBody = accordion.AccordionItemBody;
exports.AccordionItemContent = accordion.AccordionItemContent;
exports.AccordionItemContext = accordion.AccordionItemContext;
exports.AccordionItemIndicator = accordion.AccordionItemIndicator;
exports.AccordionItemTrigger = accordion.AccordionItemTrigger;
exports.AccordionPropsProvider = accordion.AccordionPropsProvider;
exports.AccordionRoot = accordion.AccordionRoot;
exports.AccordionRootProvider = accordion.AccordionRootProvider;
exports.useAccordionStyles = accordion.useAccordionStyles;
Object.defineProperty(exports, "useAccordion", {
  enumerable: true,
  get: function () { return accordion$1.useAccordion; }
});
Object.defineProperty(exports, "useAccordionContext", {
  enumerable: true,
  get: function () { return accordion$1.useAccordionContext; }
});
Object.defineProperty(exports, "useAccordionItemContext", {
  enumerable: true,
  get: function () { return accordion$1.useAccordionItemContext; }
});
exports.Accordion = namespace;
