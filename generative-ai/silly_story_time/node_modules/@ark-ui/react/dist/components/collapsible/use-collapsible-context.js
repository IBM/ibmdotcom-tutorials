'use client';
import { createContext } from '../../utils/create-context.js';

const [CollapsibleProvider, useCollapsibleContext] = createContext({
  name: "CollapsibleContext",
  hookName: "useCollapsibleContext",
  providerName: "<CollapsibleProvider />"
});

export { CollapsibleProvider, useCollapsibleContext };
