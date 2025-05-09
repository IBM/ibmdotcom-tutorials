'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [RadioGroupItemPropsProvider, useRadioGroupItemPropsContext] = createContext.createContext({
  name: "RadioGroupItemPropsContext",
  hookName: "useRadioGroupItemPropsContext",
  providerName: "<RadioGroupItemPropsProvider />"
});

exports.RadioGroupItemPropsProvider = RadioGroupItemPropsProvider;
exports.useRadioGroupItemPropsContext = useRadioGroupItemPropsContext;
