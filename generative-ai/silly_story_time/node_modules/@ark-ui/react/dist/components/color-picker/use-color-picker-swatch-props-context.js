'use client';
import { createContext } from '../../utils/create-context.js';

const [ColorPickerSwatchPropsProvider, useColorPickerSwatchPropsContext] = createContext({
  name: "ColorPickerSwatchContext",
  hookName: "useColorPickerSwatchContext",
  providerName: "<ColorPickerSwatchProvider />"
});

export { ColorPickerSwatchPropsProvider, useColorPickerSwatchPropsContext };
