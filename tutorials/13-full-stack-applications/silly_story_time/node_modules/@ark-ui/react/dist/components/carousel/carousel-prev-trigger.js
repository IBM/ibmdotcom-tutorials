'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCarouselContext } from './use-carousel-context.js';

const CarouselPrevTrigger = forwardRef((props, ref) => {
  const carousel = useCarouselContext();
  const mergedProps = mergeProps(carousel.getPrevTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
CarouselPrevTrigger.displayName = "CarouselPrevTrigger";

export { CarouselPrevTrigger };
