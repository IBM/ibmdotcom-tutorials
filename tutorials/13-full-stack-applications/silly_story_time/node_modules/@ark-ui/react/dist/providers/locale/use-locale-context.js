'use client';
import { createContext } from '../../utils/create-context.js';

const [LocaleContextProvider, useLocaleContext] = createContext({
  name: "LocaleContext",
  hookName: "useLocaleContext",
  providerName: "<LocaleProvider />",
  strict: false,
  defaultValue: { dir: "ltr", locale: "en-US" }
});

export { LocaleContextProvider, useLocaleContext };
