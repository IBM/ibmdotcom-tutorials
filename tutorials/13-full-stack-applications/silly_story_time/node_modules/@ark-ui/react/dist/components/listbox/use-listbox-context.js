'use client';
import { createContext } from '../../utils/create-context.js';

const [ListboxProvider, useListboxContext] = createContext({
  name: "ListboxContext",
  hookName: "useListboxContext",
  providerName: "<ListboxProvider />"
});

export { ListboxProvider, useListboxContext };
