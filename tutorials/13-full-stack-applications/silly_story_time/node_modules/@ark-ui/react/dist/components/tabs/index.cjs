'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const tabContent = require('./tab-content.cjs');
const tabIndicator = require('./tab-indicator.cjs');
const tabList = require('./tab-list.cjs');
const tabTrigger = require('./tab-trigger.cjs');
const tabsContext = require('./tabs-context.cjs');
const tabsRoot = require('./tabs-root.cjs');
const tabsRootProvider = require('./tabs-root-provider.cjs');
const useTabs = require('./use-tabs.cjs');
const useTabsContext = require('./use-tabs-context.cjs');
const tabs$1 = require('./tabs.cjs');
const tabs = require('@zag-js/tabs');



exports.TabContent = tabContent.TabContent;
exports.TabIndicator = tabIndicator.TabIndicator;
exports.TabList = tabList.TabList;
exports.TabTrigger = tabTrigger.TabTrigger;
exports.TabsContext = tabsContext.TabsContext;
exports.TabsRoot = tabsRoot.TabsRoot;
exports.TabsRootProvider = tabsRootProvider.TabsRootProvider;
exports.useTabs = useTabs.useTabs;
exports.useTabsContext = useTabsContext.useTabsContext;
exports.Tabs = tabs$1;
Object.defineProperty(exports, "tabsAnatomy", {
  enumerable: true,
  get: () => tabs.anatomy
});
