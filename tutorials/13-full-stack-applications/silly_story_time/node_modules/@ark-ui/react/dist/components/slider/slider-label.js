'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSliderContext } from './use-slider-context.js';

const SliderLabel = forwardRef((props, ref) => {
  const slider = useSliderContext();
  const mergedProps = mergeProps(slider.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
SliderLabel.displayName = "SliderLabel";

export { SliderLabel };
