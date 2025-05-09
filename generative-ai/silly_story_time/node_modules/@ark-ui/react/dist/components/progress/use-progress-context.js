'use client';
import { createContext } from '../../utils/create-context.js';

const [ProgressProvider, useProgressContext] = createContext({
  name: "ProgressContext",
  hookName: "useProgressContext",
  providerName: "<ProgressProvider />"
});

export { ProgressProvider, useProgressContext };
