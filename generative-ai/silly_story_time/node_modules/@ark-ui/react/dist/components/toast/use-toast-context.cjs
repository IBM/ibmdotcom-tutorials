'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ToastProvider, useToastContext] = createContext.createContext({
  name: "ToastContext",
  hookName: "useToastContext",
  providerName: "<ToastProvider />"
});

exports.ToastProvider = ToastProvider;
exports.useToastContext = useToastContext;
