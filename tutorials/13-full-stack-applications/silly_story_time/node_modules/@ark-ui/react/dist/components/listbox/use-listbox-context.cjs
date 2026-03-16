'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ListboxProvider, useListboxContext] = createContext.createContext({
  name: "ListboxContext",
  hookName: "useListboxContext",
  providerName: "<ListboxProvider />"
});

exports.ListboxProvider = ListboxProvider;
exports.useListboxContext = useListboxContext;
