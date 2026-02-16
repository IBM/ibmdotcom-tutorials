'use client';
import { createContext } from '../../utils/create-context.js';

const [ComboboxItemPropsProvider, useComboboxItemPropsContext] = createContext({
  name: "ComboboxItemPropsContext",
  hookName: "useComboboxItemPropsContext",
  providerName: "<ComboboxItemPropsProvider />"
});

export { ComboboxItemPropsProvider, useComboboxItemPropsContext };
