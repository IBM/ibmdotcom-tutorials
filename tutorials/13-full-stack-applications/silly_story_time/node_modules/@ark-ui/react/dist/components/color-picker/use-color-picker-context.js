'use client';
import { createContext } from '../../utils/create-context.js';

const [ColorPickerProvider, useColorPickerContext] = createContext({
  name: "ColorPickerContext",
  hookName: "useColorPickerContext",
  providerName: "<ColorPickerProvider />"
});

export { ColorPickerProvider, useColorPickerContext };
