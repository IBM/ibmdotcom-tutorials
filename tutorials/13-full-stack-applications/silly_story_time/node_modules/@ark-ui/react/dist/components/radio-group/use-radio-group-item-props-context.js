'use client';
import { createContext } from '../../utils/create-context.js';

const [RadioGroupItemPropsProvider, useRadioGroupItemPropsContext] = createContext({
  name: "RadioGroupItemPropsContext",
  hookName: "useRadioGroupItemPropsContext",
  providerName: "<RadioGroupItemPropsProvider />"
});

export { RadioGroupItemPropsProvider, useRadioGroupItemPropsContext };
