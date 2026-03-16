'use client';
import { createContext } from '../../utils/create-context.js';

const [MenuItemProvider, useMenuItemContext] = createContext({
  name: "MenuItemContext",
  hookName: "useMenuItemContext",
  providerName: "<MenuItemProvider />"
});

export { MenuItemProvider, useMenuItemContext };
