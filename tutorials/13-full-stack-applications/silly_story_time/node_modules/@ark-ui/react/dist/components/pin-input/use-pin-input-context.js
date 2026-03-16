'use client';
import { createContext } from '../../utils/create-context.js';

const [PinInputProvider, usePinInputContext] = createContext({
  name: "PinInputContext",
  hookName: "usePinInputContext",
  providerName: "<PinInputProvider />"
});

export { PinInputProvider, usePinInputContext };
