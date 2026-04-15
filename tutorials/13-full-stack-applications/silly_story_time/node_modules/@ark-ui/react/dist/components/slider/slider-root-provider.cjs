'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSliderContext = require('./use-slider-context.cjs');

const SliderRootProvider = react.forwardRef((props, ref) => {
  const [{ value: slider }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(slider.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSliderContext.SliderProvider, { value: slider, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
SliderRootProvider.displayName = "SliderRootProvider";

exports.SliderRootProvider = SliderRootProvider;
