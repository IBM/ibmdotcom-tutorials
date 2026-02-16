'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ComboboxItemProvider, useComboboxItemContext] = createContext.createContext({
  name: "ComboboxItemContext",
  hookName: "useComboboxItemContext",
  providerName: "<ComboboxItemProvider />"
});

exports.ComboboxItemProvider = ComboboxItemProvider;
exports.useComboboxItemContext = useComboboxItemContext;
