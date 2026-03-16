'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ProgressProvider, useProgressContext] = createContext.createContext({
  name: "ProgressContext",
  hookName: "useProgressContext",
  providerName: "<ProgressProvider />"
});

exports.ProgressProvider = ProgressProvider;
exports.useProgressContext = useProgressContext;
