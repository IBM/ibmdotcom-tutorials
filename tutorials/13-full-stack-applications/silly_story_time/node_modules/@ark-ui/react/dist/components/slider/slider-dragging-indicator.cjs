'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSliderContext = require('./use-slider-context.cjs');
const useSliderThumbPropsContext = require('./use-slider-thumb-props-context.cjs');

const SliderDraggingIndicator = react.forwardRef((props, ref) => {
  const slider = useSliderContext.useSliderContext();
  const { index } = useSliderThumbPropsContext.useSliderThumbPropsContext();
  const mergedProps = react$1.mergeProps(slider.getDraggingIndicatorProps({ index }), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children: props.children || slider.getThumbValue(index) });
});
SliderDraggingIndicator.displayName = "SliderDraggingIndicator";

exports.SliderDraggingIndicator = SliderDraggingIndicator;
