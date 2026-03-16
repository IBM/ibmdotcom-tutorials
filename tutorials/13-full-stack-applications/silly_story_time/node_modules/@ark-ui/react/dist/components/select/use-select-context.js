'use client';
import { createContext } from '../../utils/create-context.js';

const [SelectProvider, useSelectContext] = createContext({
  name: "SelectContext",
  hookName: "useSelectContext",
  providerName: "<SelectProvider />"
});

export { SelectProvider, useSelectContext };
