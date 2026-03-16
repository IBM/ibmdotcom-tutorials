'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCarouselContext } from './use-carousel-context.js';

const CarouselControl = forwardRef((props, ref) => {
  const carousel = useCarouselContext();
  const mergedProps = mergeProps(carousel.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ...props, ref });
});
CarouselControl.displayName = "CarouselControl";

export { CarouselControl };
