'use client';
import { createContext } from '../../utils/create-context.js';

const [SliderThumbPropsProvider, useSliderThumbPropsContext] = createContext({
  name: "SliderThumbPropsContext",
  hookName: "useSliderThumbPropsContext",
  providerName: "<SliderThumbPropsProvider />"
});

export { SliderThumbPropsProvider, useSliderThumbPropsContext };
