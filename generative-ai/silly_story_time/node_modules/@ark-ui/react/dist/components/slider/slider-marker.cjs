'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSliderContext = require('./use-slider-context.cjs');

const SliderMarker = react.forwardRef((props, ref) => {
  const [markerProps, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const slider = useSliderContext.useSliderContext();
  const mergedProps = react$1.mergeProps(slider.getMarkerProps(markerProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref });
});
SliderMarker.displayName = "SliderMarker";

exports.SliderMarker = SliderMarker;
