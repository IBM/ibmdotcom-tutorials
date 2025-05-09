'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSliderContext = require('./use-slider-context.cjs');

const SliderRange = react.forwardRef((props, ref) => {
  const slider = useSliderContext.useSliderContext();
  const mergedProps = react$1.mergeProps(slider.getRangeProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
SliderRange.displayName = "SliderRange";

exports.SliderRange = SliderRange;
