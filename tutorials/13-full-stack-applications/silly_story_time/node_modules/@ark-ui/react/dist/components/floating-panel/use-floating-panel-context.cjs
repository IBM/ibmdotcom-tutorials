'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [FloatingPanelProvider, useFloatingPanelContext] = createContext.createContext({
  name: "FloatingPanelContext",
  hookName: "useFloatingPanelContext",
  providerName: "<FloatingPanelProvider />"
});

exports.FloatingPanelProvider = FloatingPanelProvider;
exports.useFloatingPanelContext = useFloatingPanelContext;
