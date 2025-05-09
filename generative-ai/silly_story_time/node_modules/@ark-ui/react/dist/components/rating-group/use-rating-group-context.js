'use client';
import { createContext } from '../../utils/create-context.js';

const [RatingGroupProvider, useRatingGroupContext] = createContext({
  name: "RatingGroupContext",
  hookName: "useRatingGroupContext",
  providerName: "<RatingGroupProvider />"
});

export { RatingGroupProvider, useRatingGroupContext };
