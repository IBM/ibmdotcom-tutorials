'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useCarouselContext = require('./use-carousel-context.cjs');

const CarouselIndicator = react.forwardRef((props, ref) => {
  const [indicatorProps, localProps] = createSplitProps.createSplitProps()(props, ["readOnly", "index"]);
  const carousel = useCarouselContext.useCarouselContext();
  const mergedProps = react$1.mergeProps(carousel.getIndicatorProps(indicatorProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
CarouselIndicator.displayName = "CarouselIndicator";

exports.CarouselIndicator = CarouselIndicator;
