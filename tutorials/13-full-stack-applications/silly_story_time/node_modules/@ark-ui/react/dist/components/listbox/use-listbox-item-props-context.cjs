'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ListboxItemPropsProvider, useListboxItemPropsContext] = createContext.createContext({
  name: "ListboxItemPropsContext",
  hookName: "useListboxItemPropsContext",
  providerName: "<ListboxItemPropsProvider />"
});

exports.ListboxItemPropsProvider = ListboxItemPropsProvider;
exports.useListboxItemPropsContext = useListboxItemPropsContext;
