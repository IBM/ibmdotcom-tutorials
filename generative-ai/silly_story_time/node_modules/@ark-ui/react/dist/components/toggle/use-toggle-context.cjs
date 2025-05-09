'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ToggleProvider, useToggleContext] = createContext.createContext({
  name: "ToggleContext",
  hookName: "useToggleContext",
  providerName: "<ToggleProvider />"
});

exports.ToggleProvider = ToggleProvider;
exports.useToggleContext = useToggleContext;
