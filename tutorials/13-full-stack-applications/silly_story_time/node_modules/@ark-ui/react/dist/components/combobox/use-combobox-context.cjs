'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ComboboxProvider, useComboboxContext] = createContext.createContext({
  name: "ComboboxContext",
  hookName: "useComboboxContext",
  providerName: "<ComboboxProvider />"
});

exports.ComboboxProvider = ComboboxProvider;
exports.useComboboxContext = useComboboxContext;
