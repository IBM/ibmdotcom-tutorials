'use client';
import { createContext } from '../../utils/create-context.js';

const [MenuProvider, useMenuContext] = createContext({
  name: "MenuContext",
  hookName: "useMenuContext",
  providerName: "<MenuProvider />",
  strict: false
});

export { MenuProvider, useMenuContext };
