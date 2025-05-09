'use client';
import { createContext } from '../../utils/create-context.js';

const [SelectItemGroupPropsProvider, useSelectItemGroupPropsContext] = createContext({
  name: "SelectItemGroupPropsContext",
  hookName: "useSelectItemGroupPropsContext",
  providerName: "<SelectItemGroupPropsProvider />"
});

export { SelectItemGroupPropsProvider, useSelectItemGroupPropsContext };
