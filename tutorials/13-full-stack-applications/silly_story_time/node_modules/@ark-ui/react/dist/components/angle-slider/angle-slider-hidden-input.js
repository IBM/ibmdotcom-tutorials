'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useAngleSliderContext } from './use-angle-slider-context.js';

const AngleSliderHiddenInput = forwardRef((props, ref) => {
  const angleSlider = useAngleSliderContext();
  const mergedProps = mergeProps(angleSlider.getHiddenInputProps(), props);
  return /* @__PURE__ */ jsx(ark.input, { ...mergedProps, ref });
});
AngleSliderHiddenInput.displayName = "AngleSliderHiddenInput";

export { AngleSliderHiddenInput };
