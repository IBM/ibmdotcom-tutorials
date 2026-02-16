'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SliderProvider, useSliderContext] = createContext.createContext({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<SliderProvider />"
});

exports.SliderProvider = SliderProvider;
exports.useSliderContext = useSliderContext;
