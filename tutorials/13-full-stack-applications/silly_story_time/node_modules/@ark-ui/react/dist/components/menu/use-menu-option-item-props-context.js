'use client';
import { createContext } from '../../utils/create-context.js';

const [MenuOptionItemPropsProvider, useMenuOptionItemPropsContext] = createContext({
  name: "MenuOptionItemPropsContext",
  hookName: "useMenuOptionItemPropsContext",
  providerName: "<MenuOptionItemPropsProvider />"
});

export { MenuOptionItemPropsProvider, useMenuOptionItemPropsContext };
