'use client';
import { createContext } from '../../utils/create-context.js';

const [AngleSliderProvider, useAngleSliderContext] = createContext({
  name: "AngleSliderContext",
  hookName: "useAngleSliderContext",
  providerName: "<AngleSliderProvider />"
});

export { AngleSliderProvider, useAngleSliderContext };
