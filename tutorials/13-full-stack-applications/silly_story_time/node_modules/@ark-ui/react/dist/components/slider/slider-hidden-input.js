'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSliderContext } from './use-slider-context.js';
import { useSliderThumbPropsContext } from './use-slider-thumb-props-context.js';

const SliderHiddenInput = forwardRef((props, ref) => {
  const slider = useSliderContext();
  const thumbProps = useSliderThumbPropsContext();
  const mergedProps = mergeProps(slider.getHiddenInputProps(thumbProps), props);
  return /* @__PURE__ */ jsx(ark.input, { ...mergedProps, ref });
});
SliderHiddenInput.displayName = "SliderHiddenInput";

export { SliderHiddenInput };
