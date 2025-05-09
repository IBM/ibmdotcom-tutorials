'use client';
import { createContext } from '../../utils/create-context.js';

const [MenuMachineProvider, useMenuMachineContext] = createContext({
  name: "MenuMachineContext",
  hookName: "useMenuMachineContext",
  providerName: "<MenuMachineProvider />",
  strict: false
});

export { MenuMachineProvider, useMenuMachineContext };
