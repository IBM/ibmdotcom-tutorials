'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useSliderContext } from './use-slider-context.js';
import { SliderThumbPropsProvider } from './use-slider-thumb-props-context.js';

const SliderThumb = forwardRef((props, ref) => {
  const [thumbProps, localProps] = createSplitProps()(props, ["index", "name"]);
  const slider = useSliderContext();
  const mergedProps = mergeProps(slider.getThumbProps(thumbProps), localProps);
  return /* @__PURE__ */ jsx(SliderThumbPropsProvider, { value: thumbProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
SliderThumb.displayName = "SliderThumb";

export { SliderThumb };
