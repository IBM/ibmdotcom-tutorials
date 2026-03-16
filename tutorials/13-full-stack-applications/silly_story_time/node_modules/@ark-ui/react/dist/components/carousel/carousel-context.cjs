'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useCarouselContext = require('./use-carousel-context.cjs');

const CarouselContext = (props) => props.children(useCarouselContext.useCarouselContext());

exports.CarouselContext = CarouselContext;
