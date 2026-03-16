'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ListboxItemProvider, useListboxItemContext] = createContext.createContext({
  name: "ListboxItemContext",
  hookName: "useListboxItemContext",
  providerName: "<ListboxItemProvider />"
});

exports.ListboxItemProvider = ListboxItemProvider;
exports.useListboxItemContext = useListboxItemContext;
