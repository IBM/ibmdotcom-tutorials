'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [PresenceProvider, usePresenceContext] = createContext.createContext({
  name: "PresenceContext",
  hookName: "usePresenceContext",
  providerName: "<PresenceProvider />"
});

exports.PresenceProvider = PresenceProvider;
exports.usePresenceContext = usePresenceContext;
