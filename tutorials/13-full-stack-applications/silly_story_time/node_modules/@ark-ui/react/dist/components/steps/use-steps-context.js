'use client';
import { createContext } from '../../utils/create-context.js';

const [StepsProvider, useStepsContext] = createContext({
  name: "StepsContext",
  hookName: "useStepsContext",
  providerName: "<StepsProvider />"
});

export { StepsProvider, useStepsContext };
