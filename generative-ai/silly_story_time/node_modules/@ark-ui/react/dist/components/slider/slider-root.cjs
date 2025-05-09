'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSlider = require('./use-slider.cjs');
const useSliderContext = require('./use-slider-context.cjs');

const SliderRoot = react.forwardRef((props, ref) => {
  const [useSliderProps, localProps] = createSplitProps.createSplitProps()(props, [
    "aria-label",
    "aria-labelledby",
    "defaultValue",
    "disabled",
    "form",
    "getAriaValueText",
    "id",
    "ids",
    "invalid",
    "max",
    "min",
    "minStepsBetweenThumbs",
    "name",
    "onFocusChange",
    "onValueChange",
    "onValueChangeEnd",
    "orientation",
    "origin",
    "readOnly",
    "step",
    "thumbAlignment",
    "thumbAlignment",
    "thumbSize",
    "value"
  ]);
  const slider = useSlider.useSlider(useSliderProps);
  const mergedProps = react$1.mergeProps(slider.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSliderContext.SliderProvider, { value: slider, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
SliderRoot.displayName = "SliderRoot";

exports.SliderRoot = SliderRoot;
