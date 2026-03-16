'use client';
import { createContext } from '../../utils/create-context.js';

const [SliderProvider, useSliderContext] = createContext({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<SliderProvider />"
});

export { SliderProvider, useSliderContext };
