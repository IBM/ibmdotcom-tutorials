'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [LocaleContextProvider, useLocaleContext] = createContext.createContext({
  name: "LocaleContext",
  hookName: "useLocaleContext",
  providerName: "<LocaleProvider />",
  strict: false,
  defaultValue: { dir: "ltr", locale: "en-US" }
});

exports.LocaleContextProvider = LocaleContextProvider;
exports.useLocaleContext = useLocaleContext;
