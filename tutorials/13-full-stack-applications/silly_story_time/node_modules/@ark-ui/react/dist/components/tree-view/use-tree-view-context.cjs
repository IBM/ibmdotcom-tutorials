'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TreeViewProvider, useTreeViewContext] = createContext.createContext({
  name: "TreeViewContext",
  hookName: "useTreeViewContext",
  providerName: "<TreeViewProvider />"
});

exports.TreeViewProvider = TreeViewProvider;
exports.useTreeViewContext = useTreeViewContext;
