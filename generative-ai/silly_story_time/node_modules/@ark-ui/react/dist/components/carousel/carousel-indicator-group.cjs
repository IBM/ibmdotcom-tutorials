'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useCarouselContext = require('./use-carousel-context.cjs');

const CarouselIndicatorGroup = react.forwardRef((props, ref) => {
  const carousel = useCarouselContext.useCarouselContext();
  const mergedProps = react$1.mergeProps(carousel.getIndicatorGroupProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
CarouselIndicatorGroup.displayName = "CarouselIndicatorGroup";

exports.CarouselIndicatorGroup = CarouselIndicatorGroup;
