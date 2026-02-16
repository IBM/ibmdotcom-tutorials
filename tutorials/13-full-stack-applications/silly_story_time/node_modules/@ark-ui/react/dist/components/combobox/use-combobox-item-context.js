'use client';
import { createContext } from '../../utils/create-context.js';

const [ComboboxItemProvider, useComboboxItemContext] = createContext({
  name: "ComboboxItemContext",
  hookName: "useComboboxItemContext",
  providerName: "<ComboboxItemProvider />"
});

export { ComboboxItemProvider, useComboboxItemContext };
