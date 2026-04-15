'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [AngleSliderProvider, useAngleSliderContext] = createContext.createContext({
  name: "AngleSliderContext",
  hookName: "useAngleSliderContext",
  providerName: "<AngleSliderProvider />"
});

exports.AngleSliderProvider = AngleSliderProvider;
exports.useAngleSliderContext = useAngleSliderContext;
