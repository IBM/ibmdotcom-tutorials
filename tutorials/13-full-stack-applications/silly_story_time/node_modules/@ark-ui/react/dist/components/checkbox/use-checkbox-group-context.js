'use client';
import { createContext } from '../../utils/create-context.js';

const [CheckboxGroupContextProvider, useCheckboxGroupContext] = createContext({
  name: "CheckboxGroupContext",
  hookName: "useCheckboxGroupContext",
  providerName: "<CheckboxGroupProvider />",
  strict: false
});

export { CheckboxGroupContextProvider, useCheckboxGroupContext };
