'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSliderContext } from './use-slider-context.js';

const SliderTrack = forwardRef((props, ref) => {
  const slider = useSliderContext();
  const mergedProps = mergeProps(slider.getTrackProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SliderTrack.displayName = "SliderTrack";

export { SliderTrack };
