'use client';
import { createContext } from '../../utils/create-context.js';

const [EnvironmentContextProvider, useEnvironmentContext] = createContext({
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

export { EnvironmentContextProvider, useEnvironmentContext };
