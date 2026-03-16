'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSliderContext = require('./use-slider-context.cjs');
const useSliderThumbPropsContext = require('./use-slider-thumb-props-context.cjs');

const SliderHiddenInput = react.forwardRef((props, ref) => {
  const slider = useSliderContext.useSliderContext();
  const thumbProps = useSliderThumbPropsContext.useSliderThumbPropsContext();
  const mergedProps = react$1.mergeProps(slider.getHiddenInputProps(thumbProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { ...mergedProps, ref });
});
SliderHiddenInput.displayName = "SliderHiddenInput";

exports.SliderHiddenInput = SliderHiddenInput;
