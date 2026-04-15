'use client';
import { createContext } from '../../utils/create-context.js';

const [ListboxItemGroupPropsProvider, useListboxItemGroupPropsContext] = createContext({
  name: "ListboxItemGroupPropsContext",
  hookName: "useListboxItemGroupPropsContext",
  providerName: "<ListboxItemGroupPropsProvider />"
});

export { ListboxItemGroupPropsProvider, useListboxItemGroupPropsContext };
