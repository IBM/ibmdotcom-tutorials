'use client';
import { createContext } from '../../utils/create-context.js';

const [MenuItemGroupProvider, useMenuItemGroupContext] = createContext({
  name: "MenuItemGroupContext",
  hookName: "useMenuItemGroupContext",
  providerName: "<MenuItemGroupProvider />"
});

export { MenuItemGroupProvider, useMenuItemGroupContext };
