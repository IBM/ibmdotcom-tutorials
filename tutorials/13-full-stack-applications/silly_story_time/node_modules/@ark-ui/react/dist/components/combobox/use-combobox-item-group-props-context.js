'use client';
import { createContext } from '../../utils/create-context.js';

const [ComboboxItemGroupPropsProvider, useComboboxItemGroupPropsContext] = createContext({
  name: "ComboboxItemGroupPropsContext",
  hookName: "useComboboxItemGroupPropsContext",
  providerName: "<ComboboxItemGroupPropsProvider />"
});

export { ComboboxItemGroupPropsProvider, useComboboxItemGroupPropsContext };
