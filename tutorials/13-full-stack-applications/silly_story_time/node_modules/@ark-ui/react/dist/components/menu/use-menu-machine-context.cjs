'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [MenuMachineProvider, useMenuMachineContext] = createContext.createContext({
  name: "MenuMachineContext",
  hookName: "useMenuMachineContext",
  providerName: "<MenuMachineProvider />",
  strict: false
});

exports.MenuMachineProvider = MenuMachineProvider;
exports.useMenuMachineContext = useMenuMachineContext;
