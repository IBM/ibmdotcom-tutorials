'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [NumberInputProvider, useNumberInputContext] = createContext.createContext({
  name: "NumberInputContext",
  hookName: "useNumberInputContext",
  providerName: "<NumberInputProvider />"
});

exports.NumberInputProvider = NumberInputProvider;
exports.useNumberInputContext = useNumberInputContext;
