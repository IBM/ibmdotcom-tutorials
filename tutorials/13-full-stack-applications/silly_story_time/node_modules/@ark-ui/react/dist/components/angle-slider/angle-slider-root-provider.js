'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { AngleSliderProvider } from './use-angle-slider-context.js';

const AngleSliderRootProvider = forwardRef((props, ref) => {
  const [{ value: angleSlider }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(angleSlider.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(AngleSliderProvider, { value: angleSlider, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
AngleSliderRootProvider.displayName = "AngleSliderRootProvider";

export { AngleSliderRootProvider };
