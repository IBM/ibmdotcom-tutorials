'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCarouselContext } from './use-carousel-context.js';

const CarouselNextTrigger = forwardRef((props, ref) => {
  const carousel = useCarouselContext();
  const mergedProps = mergeProps(carousel.getNextTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
CarouselNextTrigger.displayName = "CarouselNextTrigger";

export { CarouselNextTrigger };
