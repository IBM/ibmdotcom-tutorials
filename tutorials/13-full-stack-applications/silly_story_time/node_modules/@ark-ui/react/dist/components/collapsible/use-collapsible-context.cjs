'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [CollapsibleProvider, useCollapsibleContext] = createContext.createContext({
  name: "CollapsibleContext",
  hookName: "useCollapsibleContext",
  providerName: "<CollapsibleProvider />"
});

exports.CollapsibleProvider = CollapsibleProvider;
exports.useCollapsibleContext = useCollapsibleContext;
