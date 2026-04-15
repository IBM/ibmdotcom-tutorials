'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ComboboxItemGroupPropsProvider, useComboboxItemGroupPropsContext] = createContext.createContext({
  name: "ComboboxItemGroupPropsContext",
  hookName: "useComboboxItemGroupPropsContext",
  providerName: "<ComboboxItemGroupPropsProvider />"
});

exports.ComboboxItemGroupPropsProvider = ComboboxItemGroupPropsProvider;
exports.useComboboxItemGroupPropsContext = useComboboxItemGroupPropsContext;
