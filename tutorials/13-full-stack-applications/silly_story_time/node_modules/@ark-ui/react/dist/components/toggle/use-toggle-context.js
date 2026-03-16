'use client';
import { createContext } from '../../utils/create-context.js';

const [ToggleProvider, useToggleContext] = createContext({
  name: "ToggleContext",
  hookName: "useToggleContext",
  providerName: "<ToggleProvider />"
});

export { ToggleProvider, useToggleContext };
