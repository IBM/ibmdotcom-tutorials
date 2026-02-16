'use client';
import { createContext } from '../../utils/create-context.js';

const [TourProvider, useTourContext] = createContext({
  name: "TourContext",
  hookName: "useTourContext",
  providerName: "<TourProvider />"
});

export { TourProvider, useTourContext };
