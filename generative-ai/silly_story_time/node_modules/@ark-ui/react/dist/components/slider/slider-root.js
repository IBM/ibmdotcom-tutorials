'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useSlider } from './use-slider.js';
import { SliderProvider } from './use-slider-context.js';

const SliderRoot = forwardRef((props, ref) => {
  const [useSliderProps, localProps] = createSplitProps()(props, [
    "aria-label",
    "aria-labelledby",
    "defaultValue",
    "disabled",
    "form",
    "getAriaValueText",
    "id",
    "ids",
    "invalid",
    "max",
    "min",
    "minStepsBetweenThumbs",
    "name",
    "onFocusChange",
    "onValueChange",
    "onValueChangeEnd",
    "orientation",
    "origin",
    "readOnly",
    "step",
    "thumbAlignment",
    "thumbAlignment",
    "thumbSize",
    "value"
  ]);
  const slider = useSlider(useSliderProps);
  const mergedProps = mergeProps(slider.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(SliderProvider, { value: slider, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
SliderRoot.displayName = "SliderRoot";

export { SliderRoot };
