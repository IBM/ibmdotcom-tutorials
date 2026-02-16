'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [RadioGroupProvider, useRadioGroupContext] = createContext.createContext({
  name: "RadioGroupContext",
  hookName: "useRadioGroupContext",
  providerName: "<RadioGroupProvider />"
});

exports.RadioGroupProvider = RadioGroupProvider;
exports.useRadioGroupContext = useRadioGroupContext;
