"use strict";
'use strict';

var collapsible = require('./collapsible.cjs');
var collapsible$1 = require('@ark-ui/react/collapsible');
var namespace = require('./namespace.cjs');



exports.CollapsibleContent = collapsible.CollapsibleContent;
exports.CollapsibleContext = collapsible.CollapsibleContext;
exports.CollapsiblePropsProvider = collapsible.CollapsiblePropsProvider;
exports.CollapsibleRoot = collapsible.CollapsibleRoot;
exports.CollapsibleRootProvider = collapsible.CollapsibleRootProvider;
exports.CollapsibleTrigger = collapsible.CollapsibleTrigger;
exports.useCollapsibleStyles = collapsible.useCollapsibleStyles;
Object.defineProperty(exports, "useCollapsible", {
  enumerable: true,
  get: function () { return collapsible$1.useCollapsible; }
});
Object.defineProperty(exports, "useCollapsibleContext", {
  enumerable: true,
  get: function () { return collapsible$1.useCollapsibleContext; }
});
exports.Collapsible = namespace;
