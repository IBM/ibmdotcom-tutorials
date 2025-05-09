'use client';
import { createContext } from '../../utils/create-context.js';

const [ListboxItemPropsProvider, useListboxItemPropsContext] = createContext({
  name: "ListboxItemPropsContext",
  hookName: "useListboxItemPropsContext",
  providerName: "<ListboxItemPropsProvider />"
});

export { ListboxItemPropsProvider, useListboxItemPropsContext };
