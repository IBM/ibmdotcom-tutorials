'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { CarouselProvider } from './use-carousel-context.js';

const CarouselRootProvider = forwardRef((props, ref) => {
  const [{ value: carousel }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(carousel.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(CarouselProvider, { value: carousel, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
CarouselRootProvider.displayName = "CarouselRootProvider";

export { CarouselRootProvider };
