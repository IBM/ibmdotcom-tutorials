'use client';
import { useCarouselContext } from './use-carousel-context.js';

const CarouselContext = (props) => props.children(useCarouselContext());

export { CarouselContext };
