'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TabsProvider, useTabsContext] = createContext.createContext({
  name: "TabsContext",
  hookName: "useTabsContext",
  providerName: "<TabsProvider />"
});

exports.TabsProvider = TabsProvider;
exports.useTabsContext = useTabsContext;
