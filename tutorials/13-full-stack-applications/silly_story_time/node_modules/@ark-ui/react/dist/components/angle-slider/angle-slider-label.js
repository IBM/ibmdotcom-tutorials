'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useAngleSliderContext } from './use-angle-slider-context.js';

const AngleSliderLabel = forwardRef((props, ref) => {
  const angleSlider = useAngleSliderContext();
  const mergedProps = mergeProps(angleSlider.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
AngleSliderLabel.displayName = "AngleSliderLabel";

export { AngleSliderLabel };
