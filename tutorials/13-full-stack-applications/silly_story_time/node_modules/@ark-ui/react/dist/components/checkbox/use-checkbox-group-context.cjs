'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [CheckboxGroupContextProvider, useCheckboxGroupContext] = createContext.createContext({
  name: "CheckboxGroupContext",
  hookName: "useCheckboxGroupContext",
  providerName: "<CheckboxGroupProvider />",
  strict: false
});

exports.CheckboxGroupContextProvider = CheckboxGroupContextProvider;
exports.useCheckboxGroupContext = useCheckboxGroupContext;
