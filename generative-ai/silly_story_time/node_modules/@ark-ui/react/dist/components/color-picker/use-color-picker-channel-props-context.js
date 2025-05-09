'use client';
import { createContext } from '../../utils/create-context.js';

const [ColorPickerChannelPropsProvider, useColorPickerChannelPropsContext] = createContext({
  name: "ColorPickerChannelSliderContext",
  hookName: "useColorPickerChannelSliderContext",
  providerName: "<ColorPickerChannelSliderProvider />"
});

export { ColorPickerChannelPropsProvider, useColorPickerChannelPropsContext };
