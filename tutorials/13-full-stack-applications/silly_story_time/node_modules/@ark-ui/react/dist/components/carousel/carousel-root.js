'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useCarousel } from './use-carousel.js';
import { CarouselProvider } from './use-carousel-context.js';

const CarouselRoot = forwardRef((props, ref) => {
  const [useCarouselProps, localProps] = createSplitProps()(props, [
    "allowMouseDrag",
    "autoplay",
    "defaultPage",
    "id",
    "ids",
    "inViewThreshold",
    "loop",
    "onAutoplayStatusChange",
    "onDragStatusChange",
    "onPageChange",
    "orientation",
    "padding",
    "page",
    "slideCount",
    "slidesPerMove",
    "slidesPerPage",
    "snapType",
    "spacing",
    "translations"
  ]);
  const carousel = useCarousel(useCarouselProps);
  const mergedProps = mergeProps(carousel.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(CarouselProvider, { value: carousel, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
CarouselRoot.displayName = "CarouselRoot";

export { CarouselRoot };
