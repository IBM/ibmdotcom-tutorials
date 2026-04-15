'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ColorPickerAreaPropsProvider, useColorPickerAreaPropsContext] = createContext.createContext({
  name: "ColorPickerAreaContext",
  hookName: "useColorPickerAreaContext",
  providerName: "<ColorPickerAreaProvider />"
});

exports.ColorPickerAreaPropsProvider = ColorPickerAreaPropsProvider;
exports.useColorPickerAreaPropsContext = useColorPickerAreaPropsContext;
