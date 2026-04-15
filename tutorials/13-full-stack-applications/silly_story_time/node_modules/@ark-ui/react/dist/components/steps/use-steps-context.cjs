'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [StepsProvider, useStepsContext] = createContext.createContext({
  name: "StepsContext",
  hookName: "useStepsContext",
  providerName: "<StepsProvider />"
});

exports.StepsProvider = StepsProvider;
exports.useStepsContext = useStepsContext;
