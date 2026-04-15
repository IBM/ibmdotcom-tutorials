'use client';
import { createContext } from '../../utils/create-context.js';

const [RatingGroupItemProvider, useRatingGroupItemContext] = createContext({
  name: "RatingGroupItemContext",
  hookName: "useRatingGroupItemContext",
  providerName: "<RatingGroupItemProvider />"
});

export { RatingGroupItemProvider, useRatingGroupItemContext };
