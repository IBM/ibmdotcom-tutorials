'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SelectProvider, useSelectContext] = createContext.createContext({
  name: "SelectContext",
  hookName: "useSelectContext",
  providerName: "<SelectProvider />"
});

exports.SelectProvider = SelectProvider;
exports.useSelectContext = useSelectContext;
