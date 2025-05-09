'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [MenuItemGroupProvider, useMenuItemGroupContext] = createContext.createContext({
  name: "MenuItemGroupContext",
  hookName: "useMenuItemGroupContext",
  providerName: "<MenuItemGroupProvider />"
});

exports.MenuItemGroupProvider = MenuItemGroupProvider;
exports.useMenuItemGroupContext = useMenuItemGroupContext;
