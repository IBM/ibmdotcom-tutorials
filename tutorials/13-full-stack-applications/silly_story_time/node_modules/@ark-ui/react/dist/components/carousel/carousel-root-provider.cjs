'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useCarouselContext = require('./use-carousel-context.cjs');

const CarouselRootProvider = react.forwardRef((props, ref) => {
  const [{ value: carousel }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(carousel.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useCarouselContext.CarouselProvider, { value: carousel, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
CarouselRootProvider.displayName = "CarouselRootProvider";

exports.CarouselRootProvider = CarouselRootProvider;
