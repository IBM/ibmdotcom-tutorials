'use client';
import { createContext } from '../../utils/create-context.js';

const [NumberInputProvider, useNumberInputContext] = createContext({
  name: "NumberInputContext",
  hookName: "useNumberInputContext",
  providerName: "<NumberInputProvider />"
});

export { NumberInputProvider, useNumberInputContext };
