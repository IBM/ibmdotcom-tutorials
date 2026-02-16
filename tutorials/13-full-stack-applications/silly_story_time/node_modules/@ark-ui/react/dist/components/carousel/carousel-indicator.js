'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useCarouselContext } from './use-carousel-context.js';

const CarouselIndicator = forwardRef((props, ref) => {
  const [indicatorProps, localProps] = createSplitProps()(props, ["readOnly", "index"]);
  const carousel = useCarouselContext();
  const mergedProps = mergeProps(carousel.getIndicatorProps(indicatorProps), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
CarouselIndicator.displayName = "CarouselIndicator";

export { CarouselIndicator };
