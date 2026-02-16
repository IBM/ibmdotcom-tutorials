'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSliderContext } from './use-slider-context.js';

const SliderRange = forwardRef((props, ref) => {
  const slider = useSliderContext();
  const mergedProps = mergeProps(slider.getRangeProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SliderRange.displayName = "SliderRange";

export { SliderRange };
