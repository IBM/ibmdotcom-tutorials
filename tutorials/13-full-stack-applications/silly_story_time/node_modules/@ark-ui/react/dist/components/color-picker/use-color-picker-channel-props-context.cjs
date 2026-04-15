'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [ColorPickerChannelPropsProvider, useColorPickerChannelPropsContext] = createContext.createContext({
  name: "ColorPickerChannelSliderContext",
  hookName: "useColorPickerChannelSliderContext",
  providerName: "<ColorPickerChannelSliderProvider />"
});

exports.ColorPickerChannelPropsProvider = ColorPickerChannelPropsProvider;
exports.useColorPickerChannelPropsContext = useColorPickerChannelPropsContext;
