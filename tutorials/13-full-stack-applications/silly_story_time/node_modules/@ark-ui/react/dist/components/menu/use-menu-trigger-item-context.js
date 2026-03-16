'use client';
import { createContext } from '../../utils/create-context.js';

const [MenuTriggerItemProvider, useMenuTriggerItemContext] = createContext({
  name: "MenuMachineContext",
  hookName: "useMenuMachineContext",
  providerName: "<MenuMachineProvider />",
  strict: false
});

export { MenuTriggerItemProvider, useMenuTriggerItemContext };
