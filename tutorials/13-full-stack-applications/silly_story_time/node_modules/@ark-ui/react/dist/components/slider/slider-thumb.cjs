'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSliderContext = require('./use-slider-context.cjs');
const useSliderThumbPropsContext = require('./use-slider-thumb-props-context.cjs');

const SliderThumb = react.forwardRef((props, ref) => {
  const [thumbProps, localProps] = createSplitProps.createSplitProps()(props, ["index", "name"]);
  const slider = useSliderContext.useSliderContext();
  const mergedProps = react$1.mergeProps(slider.getThumbProps(thumbProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSliderThumbPropsContext.SliderThumbPropsProvider, { value: thumbProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
SliderThumb.displayName = "SliderThumb";

exports.SliderThumb = SliderThumb;
