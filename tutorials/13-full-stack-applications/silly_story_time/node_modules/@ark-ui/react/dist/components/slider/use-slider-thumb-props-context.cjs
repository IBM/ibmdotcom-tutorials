'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SliderThumbPropsProvider, useSliderThumbPropsContext] = createContext.createContext({
  name: "SliderThumbPropsContext",
  hookName: "useSliderThumbPropsContext",
  providerName: "<SliderThumbPropsProvider />"
});

exports.SliderThumbPropsProvider = SliderThumbPropsProvider;
exports.useSliderThumbPropsContext = useSliderThumbPropsContext;
