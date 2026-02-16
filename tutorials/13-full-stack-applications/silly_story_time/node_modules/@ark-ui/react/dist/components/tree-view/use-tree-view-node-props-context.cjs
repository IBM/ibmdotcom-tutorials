'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TreeViewNodePropsProvider, useTreeViewNodePropsContext] = createContext.createContext({
  name: "TreeViewNodePropsContext",
  hookName: "useTreeViewNodePropsContext",
  providerName: "<TreeViewItemProvider />"
});

exports.TreeViewNodePropsProvider = TreeViewNodePropsProvider;
exports.useTreeViewNodePropsContext = useTreeViewNodePropsContext;
