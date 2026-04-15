'use client';
import { createContext } from '../../utils/create-context.js';

const [ColorPickerAreaPropsProvider, useColorPickerAreaPropsContext] = createContext({
  name: "ColorPickerAreaContext",
  hookName: "useColorPickerAreaContext",
  providerName: "<ColorPickerAreaProvider />"
});

export { ColorPickerAreaPropsProvider, useColorPickerAreaPropsContext };
