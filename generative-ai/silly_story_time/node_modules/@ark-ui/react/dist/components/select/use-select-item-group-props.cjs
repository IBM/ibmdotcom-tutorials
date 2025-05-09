'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SelectItemGroupPropsProvider, useSelectItemGroupPropsContext] = createContext.createContext({
  name: "SelectItemGroupPropsContext",
  hookName: "useSelectItemGroupPropsContext",
  providerName: "<SelectItemGroupPropsProvider />"
});

exports.SelectItemGroupPropsProvider = SelectItemGroupPropsProvider;
exports.useSelectItemGroupPropsContext = useSelectItemGroupPropsContext;
