'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ListboxItemGroupPropsProvider, useListboxItemGroupPropsContext] = createContext.createContext({
  name: "ListboxItemGroupPropsContext",
  hookName: "useListboxItemGroupPropsContext",
  providerName: "<ListboxItemGroupPropsProvider />"
});

exports.ListboxItemGroupPropsProvider = ListboxItemGroupPropsProvider;
exports.useListboxItemGroupPropsContext = useListboxItemGroupPropsContext;
