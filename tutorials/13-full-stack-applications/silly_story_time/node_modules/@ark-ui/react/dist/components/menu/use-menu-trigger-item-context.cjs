'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [MenuTriggerItemProvider, useMenuTriggerItemContext] = createContext.createContext({
  name: "MenuMachineContext",
  hookName: "useMenuMachineContext",
  providerName: "<MenuMachineProvider />",
  strict: false
});

exports.MenuTriggerItemProvider = MenuTriggerItemProvider;
exports.useMenuTriggerItemContext = useMenuTriggerItemContext;
