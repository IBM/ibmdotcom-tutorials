'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [MenuItemProvider, useMenuItemContext] = createContext.createContext({
  name: "MenuItemContext",
  hookName: "useMenuItemContext",
  providerName: "<MenuItemProvider />"
});

exports.MenuItemProvider = MenuItemProvider;
exports.useMenuItemContext = useMenuItemContext;
