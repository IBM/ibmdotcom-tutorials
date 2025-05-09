'use client';
import { createContext } from '../../utils/create-context.js';

const [CarouselProvider, useCarouselContext] = createContext({
  name: "CarouselContext",
  hookName: "useCarouselContext",
  providerName: "<CarouselProvider />"
});

export { CarouselProvider, useCarouselContext };
