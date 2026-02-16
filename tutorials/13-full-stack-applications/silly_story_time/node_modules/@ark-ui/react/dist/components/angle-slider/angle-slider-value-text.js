'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useAngleSliderContext } from './use-angle-slider-context.js';

const AngleSliderValueText = forwardRef((props, ref) => {
  const angleSlider = useAngleSliderContext();
  return /* @__PURE__ */ jsx(ark.div, { ...props, ref, children: props.children || angleSlider.valueAsDegree });
});
AngleSliderValueText.displayName = "AngleSliderValueText";

export { AngleSliderValueText };
