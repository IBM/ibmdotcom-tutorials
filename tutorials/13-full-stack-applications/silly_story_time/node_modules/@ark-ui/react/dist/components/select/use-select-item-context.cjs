'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SelectItemProvider, useSelectItemContext] = createContext.createContext({
  name: "SelectItemContext",
  hookName: "useSelectItemContext",
  providerName: "<SelectItemProvider />"
});

exports.SelectItemProvider = SelectItemProvider;
exports.useSelectItemContext = useSelectItemContext;
