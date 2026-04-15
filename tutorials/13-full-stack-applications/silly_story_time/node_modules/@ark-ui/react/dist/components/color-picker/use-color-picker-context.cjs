'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ColorPickerProvider, useColorPickerContext] = createContext.createContext({
  name: "ColorPickerContext",
  hookName: "useColorPickerContext",
  providerName: "<ColorPickerProvider />"
});

exports.ColorPickerProvider = ColorPickerProvider;
exports.useColorPickerContext = useColorPickerContext;
