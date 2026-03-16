'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ColorPickerSwatchPropsProvider, useColorPickerSwatchPropsContext] = createContext.createContext({
  name: "ColorPickerSwatchContext",
  hookName: "useColorPickerSwatchContext",
  providerName: "<ColorPickerSwatchProvider />"
});

exports.ColorPickerSwatchPropsProvider = ColorPickerSwatchPropsProvider;
exports.useColorPickerSwatchPropsContext = useColorPickerSwatchPropsContext;
