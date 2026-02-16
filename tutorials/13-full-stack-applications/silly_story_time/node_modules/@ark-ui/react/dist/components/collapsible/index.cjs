'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const collapsibleContent = require('./collapsible-content.cjs');
const collapsibleContext = require('./collapsible-context.cjs');
const collapsibleIndicator = require('./collapsible-indicator.cjs');
const collapsibleRoot = require('./collapsible-root.cjs');
const collapsibleRootProvider = require('./collapsible-root-provider.cjs');
const collapsibleTrigger = require('./collapsible-trigger.cjs');
const useCollapsible = require('./use-collapsible.cjs');
const useCollapsibleContext = require('./use-collapsible-context.cjs');
const collapsible$1 = require('./collapsible.cjs');
const collapsible = require('@zag-js/collapsible');



exports.CollapsibleContent = collapsibleContent.CollapsibleContent;
exports.CollapsibleContext = collapsibleContext.CollapsibleContext;
exports.CollapsibleIndicator = collapsibleIndicator.CollapsibleIndicator;
exports.CollapsibleRoot = collapsibleRoot.CollapsibleRoot;
exports.CollapsibleRootProvider = collapsibleRootProvider.CollapsibleRootProvider;
exports.CollapsibleTrigger = collapsibleTrigger.CollapsibleTrigger;
exports.useCollapsible = useCollapsible.useCollapsible;
exports.useCollapsibleContext = useCollapsibleContext.useCollapsibleContext;
exports.Collapsible = collapsible$1;
Object.defineProperty(exports, "collapsibleAnatomy", {
  enumerable: true,
  get: () => collapsible.anatomy
});
