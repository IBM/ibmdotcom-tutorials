'use client';
import { createContext } from '../../utils/create-context.js';

const [PopoverProvider, usePopoverContext] = createContext({
  name: "PopoverContext",
  hookName: "usePopoverContext",
  providerName: "<PopoverProvider />"
});

export { PopoverProvider, usePopoverContext };
