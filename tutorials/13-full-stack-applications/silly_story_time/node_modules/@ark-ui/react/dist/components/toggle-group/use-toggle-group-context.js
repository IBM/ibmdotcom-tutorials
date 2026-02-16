'use client';
import { createContext } from '../../utils/create-context.js';

const [ToggleGroupProvider, useToggleGroupContext] = createContext({
  name: "ToggleGroupContext",
  hookName: "useToggleGroupContext",
  providerName: "<ToggleGroupProvider />"
});

export { ToggleGroupProvider, useToggleGroupContext };
