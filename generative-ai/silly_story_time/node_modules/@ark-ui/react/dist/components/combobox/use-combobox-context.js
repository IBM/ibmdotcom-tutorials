'use client';
import { createContext } from '../../utils/create-context.js';

const [ComboboxProvider, useComboboxContext] = createContext({
  name: "ComboboxContext",
  hookName: "useComboboxContext",
  providerName: "<ComboboxProvider />"
});

export { ComboboxProvider, useComboboxContext };
