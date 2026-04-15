'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [HoverCardProvider, useHoverCardContext] = createContext.createContext({
  name: "HoverCardContext",
  hookName: "useHoverCardContext",
  providerName: "<HoverCardProvider />"
});

exports.HoverCardProvider = HoverCardProvider;
exports.useHoverCardContext = useHoverCardContext;
