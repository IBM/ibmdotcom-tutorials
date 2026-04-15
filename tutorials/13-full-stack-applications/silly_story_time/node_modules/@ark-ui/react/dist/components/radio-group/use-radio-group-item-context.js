'use client';
import { createContext } from '../../utils/create-context.js';

const [RadioGroupItemProvider, useRadioGroupItemContext] = createContext({
  name: "RadioGroupItemContext",
  hookName: "useRadioGroupItemContext",
  providerName: "<RadioGroupItemProvider />"
});

export { RadioGroupItemProvider, useRadioGroupItemContext };
