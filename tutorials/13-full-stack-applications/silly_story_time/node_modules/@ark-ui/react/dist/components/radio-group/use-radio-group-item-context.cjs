'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [RadioGroupItemProvider, useRadioGroupItemContext] = createContext.createContext({
  name: "RadioGroupItemContext",
  hookName: "useRadioGroupItemContext",
  providerName: "<RadioGroupItemProvider />"
});

exports.RadioGroupItemProvider = RadioGroupItemProvider;
exports.useRadioGroupItemContext = useRadioGroupItemContext;
