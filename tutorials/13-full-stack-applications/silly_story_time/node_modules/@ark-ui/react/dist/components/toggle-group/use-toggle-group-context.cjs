'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ToggleGroupProvider, useToggleGroupContext] = createContext.createContext({
  name: "ToggleGroupContext",
  hookName: "useToggleGroupContext",
  providerName: "<ToggleGroupProvider />"
});

exports.ToggleGroupProvider = ToggleGroupProvider;
exports.useToggleGroupContext = useToggleGroupContext;
