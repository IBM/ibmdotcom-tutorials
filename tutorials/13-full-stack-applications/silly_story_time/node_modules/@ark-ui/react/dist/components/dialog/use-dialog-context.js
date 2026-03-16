'use client';
import { createContext } from '../../utils/create-context.js';

const [DialogProvider, useDialogContext] = createContext({
  name: "DialogContext",
  hookName: "useDialogContext",
  providerName: "<DialogProvider />"
});

export { DialogProvider, useDialogContext };
