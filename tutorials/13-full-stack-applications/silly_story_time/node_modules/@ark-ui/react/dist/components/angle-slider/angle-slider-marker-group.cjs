'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useAngleSliderContext = require('./use-angle-slider-context.cjs');

const AngleSliderMarkerGroup = react.forwardRef((props, ref) => {
  const angleSlider = useAngleSliderContext.useAngleSliderContext();
  const mergedProps = react$1.mergeProps(angleSlider.getMarkerGroupProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
AngleSliderMarkerGroup.displayName = "AngleSliderMarkerGroup";

exports.AngleSliderMarkerGroup = AngleSliderMarkerGroup;
