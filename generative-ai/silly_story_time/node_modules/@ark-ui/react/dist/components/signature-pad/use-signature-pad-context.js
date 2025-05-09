'use client';
import { createContext } from '../../utils/create-context.js';

const [SignaturePadProvider, useSignaturePadContext] = createContext({
  name: "SignaturePadContext",
  hookName: "useSignaturePadContext",
  providerName: "<SignaturePadProvider />"
});

export { SignaturePadProvider, useSignaturePadContext };
