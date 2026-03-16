'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const tabContent = require('./tab-content.cjs');
const tabIndicator = require('./tab-indicator.cjs');
const tabList = require('./tab-list.cjs');
const tabTrigger = require('./tab-trigger.cjs');
const tabsContext = require('./tabs-context.cjs');
const tabsRoot = require('./tabs-root.cjs');
const tabsRootProvider = require('./tabs-root-provider.cjs');



exports.Content = tabContent.TabContent;
exports.Indicator = tabIndicator.TabIndicator;
exports.List = tabList.TabList;
exports.Trigger = tabTrigger.TabTrigger;
exports.Context = tabsContext.TabsContext;
exports.Root = tabsRoot.TabsRoot;
exports.RootProvider = tabsRootProvider.TabsRootProvider;
