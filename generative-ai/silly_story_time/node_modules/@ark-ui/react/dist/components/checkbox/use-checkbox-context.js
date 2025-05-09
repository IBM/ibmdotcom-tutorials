'use client';
import { createContext } from '../../utils/create-context.js';

const [CheckboxProvider, useCheckboxContext] = createContext({
  name: "CheckboxContext",
  hookName: "useCheckboxContext",
  providerName: "<CheckboxProvider />"
});

export { CheckboxProvider, useCheckboxContext };
