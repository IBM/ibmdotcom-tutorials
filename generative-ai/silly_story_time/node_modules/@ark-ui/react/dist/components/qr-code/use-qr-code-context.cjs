'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [QrCodeProvider, useQrCodeContext] = createContext.createContext({
  name: "QrCodeContext",
  hookName: "useQrCodeContext",
  providerName: "<QrCodeProvider />"
});

exports.QrCodeProvider = QrCodeProvider;
exports.useQrCodeContext = useQrCodeContext;
