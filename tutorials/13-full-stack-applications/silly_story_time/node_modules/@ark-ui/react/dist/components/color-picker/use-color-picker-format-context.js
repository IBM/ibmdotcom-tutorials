'use client';
import { createContext } from '../../utils/create-context.js';

const [ColorPickerFormatPropsProvider, useColorPickerFormatPropsContext] = createContext({
  name: "ColorPickerFormatContext",
  hookName: "useColorPickerFormatPropsContext",
  providerName: "<ColorPickerFormatPropsProvider />",
  strict: false
});

export { ColorPickerFormatPropsProvider, useColorPickerFormatPropsContext };
