'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCarouselContext } from './use-carousel-context.js';

const CarouselItemGroup = forwardRef((props, ref) => {
  const carousel = useCarouselContext();
  const mergedProps = mergeProps(carousel.getItemGroupProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
CarouselItemGroup.displayName = "CarouselItemGroup";

export { CarouselItemGroup };
