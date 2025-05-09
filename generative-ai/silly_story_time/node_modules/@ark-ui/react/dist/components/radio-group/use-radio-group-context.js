'use client';
import { createContext } from '../../utils/create-context.js';

const [RadioGroupProvider, useRadioGroupContext] = createContext({
  name: "RadioGroupContext",
  hookName: "useRadioGroupContext",
  providerName: "<RadioGroupProvider />"
});

export { RadioGroupProvider, useRadioGroupContext };
