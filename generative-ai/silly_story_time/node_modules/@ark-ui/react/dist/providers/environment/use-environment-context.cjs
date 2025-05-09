'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [EnvironmentContextProvider, useEnvironmentContext] = createContext.createContext({
  name: "EnvironmentContext",
  hookName: "useEnvironmentContext",
  providerName: "<EnvironmentProvider />",
  strict: false,
  defaultValue: {
    getRootNode: () => document,
    getDocument: () => document,
    getWindow: () => window
  }
});

exports.EnvironmentContextProvider = EnvironmentContextProvider;
exports.useEnvironmentContext = useEnvironmentContext;
