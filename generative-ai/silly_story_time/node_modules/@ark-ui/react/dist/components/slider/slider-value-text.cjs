'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSliderContext = require('./use-slider-context.cjs');

const SliderValueText = react.forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const slider = useSliderContext.useSliderContext();
  const mergedProps = react$1.mergeProps(slider.getValueTextProps(), rest);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children: children || slider.value.join(", ") });
});
SliderValueText.displayName = "SliderValueText";

exports.SliderValueText = SliderValueText;
