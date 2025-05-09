'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSliderContext = require('./use-slider-context.cjs');

const SliderLabel = react.forwardRef((props, ref) => {
  const slider = useSliderContext.useSliderContext();
  const mergedProps = react$1.mergeProps(slider.getLabelProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref });
});
SliderLabel.displayName = "SliderLabel";

exports.SliderLabel = SliderLabel;
