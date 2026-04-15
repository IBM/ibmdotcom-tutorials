'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SignaturePadProvider, useSignaturePadContext] = createContext.createContext({
  name: "SignaturePadContext",
  hookName: "useSignaturePadContext",
  providerName: "<SignaturePadProvider />"
});

exports.SignaturePadProvider = SignaturePadProvider;
exports.useSignaturePadContext = useSignaturePadContext;
