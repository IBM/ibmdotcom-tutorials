'use client';
import { createContext } from '../../utils/create-context.js';

const [ListboxItemProvider, useListboxItemContext] = createContext({
  name: "ListboxItemContext",
  hookName: "useListboxItemContext",
  providerName: "<ListboxItemProvider />"
});

export { ListboxItemProvider, useListboxItemContext };
