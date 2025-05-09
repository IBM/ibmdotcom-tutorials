'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useAngleSlider } from './use-angle-slider.js';
import { AngleSliderProvider } from './use-angle-slider-context.js';

const AngleSliderRoot = forwardRef((props, ref) => {
  const [useAngleSliderProps, localProps] = createSplitProps()(props, [
    "id",
    "ids",
    "name",
    "invalid",
    "readOnly",
    "disabled",
    "onValueChangeEnd",
    "onValueChange",
    "defaultValue",
    "value",
    "step"
  ]);
  const angleSlider = useAngleSlider(useAngleSliderProps);
  const mergedProps = mergeProps(angleSlider.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(AngleSliderProvider, { value: angleSlider, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
AngleSliderRoot.displayName = "AngleSliderRoot";

export { AngleSliderRoot };
