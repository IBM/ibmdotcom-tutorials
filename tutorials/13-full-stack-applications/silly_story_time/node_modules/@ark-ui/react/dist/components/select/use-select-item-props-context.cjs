'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SelectItemPropsProvider, useSelectItemPropsContext] = createContext.createContext({
  name: "SelectItemPropsContext",
  hookName: "useSelectItemPropsContext",
  providerName: "<SelectItemPropsProvider />"
});

exports.SelectItemPropsProvider = SelectItemPropsProvider;
exports.useSelectItemPropsContext = useSelectItemPropsContext;
