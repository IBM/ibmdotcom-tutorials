'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ColorPickerFormatPropsProvider, useColorPickerFormatPropsContext] = createContext.createContext({
  name: "ColorPickerFormatContext",
  hookName: "useColorPickerFormatPropsContext",
  providerName: "<ColorPickerFormatPropsProvider />",
  strict: false
});

exports.ColorPickerFormatPropsProvider = ColorPickerFormatPropsProvider;
exports.useColorPickerFormatPropsContext = useColorPickerFormatPropsContext;
