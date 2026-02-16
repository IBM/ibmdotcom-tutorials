'use client';
import { createContext } from '../../utils/create-context.js';

const [QrCodeProvider, useQrCodeContext] = createContext({
  name: "QrCodeContext",
  hookName: "useQrCodeContext",
  providerName: "<QrCodeProvider />"
});

export { QrCodeProvider, useQrCodeContext };
