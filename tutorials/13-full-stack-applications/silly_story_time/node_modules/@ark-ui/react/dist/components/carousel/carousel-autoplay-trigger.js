'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCarouselContext } from './use-carousel-context.js';

const CarouselAutoplayTrigger = forwardRef((props, ref) => {
  const carousel = useCarouselContext();
  const mergedProps = mergeProps(carousel.getAutoplayTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
CarouselAutoplayTrigger.displayName = "CarouselAutoplayTrigger";

export { CarouselAutoplayTrigger };
