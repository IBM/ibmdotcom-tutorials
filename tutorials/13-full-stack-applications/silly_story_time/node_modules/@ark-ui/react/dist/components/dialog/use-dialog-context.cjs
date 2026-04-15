'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [DialogProvider, useDialogContext] = createContext.createContext({
  name: "DialogContext",
  hookName: "useDialogContext",
  providerName: "<DialogProvider />"
});

exports.DialogProvider = DialogProvider;
exports.useDialogContext = useDialogContext;
