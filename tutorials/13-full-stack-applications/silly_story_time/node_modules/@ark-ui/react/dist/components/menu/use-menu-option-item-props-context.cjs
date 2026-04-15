'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [MenuOptionItemPropsProvider, useMenuOptionItemPropsContext] = createContext.createContext({
  name: "MenuOptionItemPropsContext",
  hookName: "useMenuOptionItemPropsContext",
  providerName: "<MenuOptionItemPropsProvider />"
});

exports.MenuOptionItemPropsProvider = MenuOptionItemPropsProvider;
exports.useMenuOptionItemPropsContext = useMenuOptionItemPropsContext;
