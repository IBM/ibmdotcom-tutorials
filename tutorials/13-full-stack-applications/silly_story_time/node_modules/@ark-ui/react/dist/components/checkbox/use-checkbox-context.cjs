'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [CheckboxProvider, useCheckboxContext] = createContext.createContext({
  name: "CheckboxContext",
  hookName: "useCheckboxContext",
  providerName: "<CheckboxProvider />"
});

exports.CheckboxProvider = CheckboxProvider;
exports.useCheckboxContext = useCheckboxContext;
