'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [MenuProvider, useMenuContext] = createContext.createContext({
  name: "MenuContext",
  hookName: "useMenuContext",
  providerName: "<MenuProvider />",
  strict: false
});

exports.MenuProvider = MenuProvider;
exports.useMenuContext = useMenuContext;
