'use client';
import { createContext } from '../../utils/create-context.js';

const [TabsProvider, useTabsContext] = createContext({
  name: "TabsContext",
  hookName: "useTabsContext",
  providerName: "<TabsProvider />"
});

export { TabsProvider, useTabsContext };
