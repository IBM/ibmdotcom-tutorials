'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useAngleSlider = require('./use-angle-slider.cjs');
const useAngleSliderContext = require('./use-angle-slider-context.cjs');

const AngleSliderRoot = react.forwardRef((props, ref) => {
  const [useAngleSliderProps, localProps] = createSplitProps.createSplitProps()(props, [
    "id",
    "ids",
    "name",
    "invalid",
    "readOnly",
    "disabled",
    "onValueChangeEnd",
    "onValueChange",
    "defaultValue",
    "value",
    "step"
  ]);
  const angleSlider = useAngleSlider.useAngleSlider(useAngleSliderProps);
  const mergedProps = react$1.mergeProps(angleSlider.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useAngleSliderContext.AngleSliderProvider, { value: angleSlider, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
AngleSliderRoot.displayName = "AngleSliderRoot";

exports.AngleSliderRoot = AngleSliderRoot;
