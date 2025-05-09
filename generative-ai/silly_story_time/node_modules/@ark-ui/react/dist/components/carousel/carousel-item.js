'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useCarouselContext } from './use-carousel-context.js';

const CarouselItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["index", "snapAlign"]);
  const carousel = useCarouselContext();
  const mergedProps = mergeProps(carousel.getItemProps(itemProps), localProps);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
CarouselItem.displayName = "CarouselItem";

export { CarouselItem };
