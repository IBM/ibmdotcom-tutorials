'use client';
import { createContext } from '../../utils/create-context.js';

const [SelectItemPropsProvider, useSelectItemPropsContext] = createContext({
  name: "SelectItemPropsContext",
  hookName: "useSelectItemPropsContext",
  providerName: "<SelectItemPropsProvider />"
});

export { SelectItemPropsProvider, useSelectItemPropsContext };
