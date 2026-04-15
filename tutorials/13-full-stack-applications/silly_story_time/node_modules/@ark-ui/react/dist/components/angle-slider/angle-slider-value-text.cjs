'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const factory = require('../factory.cjs');
const useAngleSliderContext = require('./use-angle-slider-context.cjs');

const AngleSliderValueText = react.forwardRef((props, ref) => {
  const angleSlider = useAngleSliderContext.useAngleSliderContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...props, ref, children: props.children || angleSlider.valueAsDegree });
});
AngleSliderValueText.displayName = "AngleSliderValueText";

exports.AngleSliderValueText = AngleSliderValueText;
