'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSliderContext } from './use-slider-context.js';
import { useSliderThumbPropsContext } from './use-slider-thumb-props-context.js';

const SliderDraggingIndicator = forwardRef((props, ref) => {
  const slider = useSliderContext();
  const { index } = useSliderThumbPropsContext();
  const mergedProps = mergeProps(slider.getDraggingIndicatorProps({ index }), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children: props.children || slider.getThumbValue(index) });
});
SliderDraggingIndicator.displayName = "SliderDraggingIndicator";

export { SliderDraggingIndicator };
