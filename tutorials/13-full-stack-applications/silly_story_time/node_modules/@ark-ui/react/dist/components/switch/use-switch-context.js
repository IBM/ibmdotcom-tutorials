'use client';
import { createContext } from '../../utils/create-context.js';

const [SwitchProvider, useSwitchContext] = createContext({
  name: "SwitchContext",
  hookName: "useSwitchContext",
  providerName: "<SwitchProvider />"
});

export { SwitchProvider, useSwitchContext };
