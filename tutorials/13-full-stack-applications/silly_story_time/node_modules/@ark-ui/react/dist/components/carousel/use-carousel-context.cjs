'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [CarouselProvider, useCarouselContext] = createContext.createContext({
  name: "CarouselContext",
  hookName: "useCarouselContext",
  providerName: "<CarouselProvider />"
});

exports.CarouselProvider = CarouselProvider;
exports.useCarouselContext = useCarouselContext;
