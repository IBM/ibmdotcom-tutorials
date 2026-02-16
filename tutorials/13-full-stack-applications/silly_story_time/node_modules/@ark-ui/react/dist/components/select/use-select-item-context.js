'use client';
import { createContext } from '../../utils/create-context.js';

const [SelectItemProvider, useSelectItemContext] = createContext({
  name: "SelectItemContext",
  hookName: "useSelectItemContext",
  providerName: "<SelectItemProvider />"
});

export { SelectItemProvider, useSelectItemContext };
