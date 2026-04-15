'use client';
import { createContext } from '../../utils/create-context.js';

const [ToastProvider, useToastContext] = createContext({
  name: "ToastContext",
  hookName: "useToastContext",
  providerName: "<ToastProvider />"
});

export { ToastProvider, useToastContext };
