'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSliderContext } from './use-slider-context.js';

const SliderValueText = forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const slider = useSliderContext();
  const mergedProps = mergeProps(slider.getValueTextProps(), rest);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children: children || slider.value.join(", ") });
});
SliderValueText.displayName = "SliderValueText";

export { SliderValueText };
