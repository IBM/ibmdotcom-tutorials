"use strict";
'use strict';

var tabs = require('./tabs.cjs');
var tabs$1 = require('@ark-ui/react/tabs');
var namespace = require('./namespace.cjs');



exports.TabsContent = tabs.TabsContent;
exports.TabsContentGroup = tabs.TabsContentGroup;
exports.TabsContext = tabs.TabsContext;
exports.TabsIndicator = tabs.TabsIndicator;
exports.TabsList = tabs.TabsList;
exports.TabsPropsProvider = tabs.TabsPropsProvider;
exports.TabsRoot = tabs.TabsRoot;
exports.TabsRootProvider = tabs.TabsRootProvider;
exports.TabsTrigger = tabs.TabsTrigger;
exports.useTabsStyles = tabs.useTabsStyles;
Object.defineProperty(exports, "useTabs", {
  enumerable: true,
  get: function () { return tabs$1.useTabs; }
});
Object.defineProperty(exports, "useTabsContext", {
  enumerable: true,
  get: function () { return tabs$1.useTabsContext; }
});
exports.Tabs = namespace;
