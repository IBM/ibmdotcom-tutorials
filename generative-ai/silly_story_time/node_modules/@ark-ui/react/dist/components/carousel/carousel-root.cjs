'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useCarousel = require('./use-carousel.cjs');
const useCarouselContext = require('./use-carousel-context.cjs');

const CarouselRoot = react.forwardRef((props, ref) => {
  const [useCarouselProps, localProps] = createSplitProps.createSplitProps()(props, [
    "allowMouseDrag",
    "autoplay",
    "defaultPage",
    "id",
    "ids",
    "inViewThreshold",
    "loop",
    "onAutoplayStatusChange",
    "onDragStatusChange",
    "onPageChange",
    "orientation",
    "padding",
    "page",
    "slideCount",
    "slidesPerMove",
    "slidesPerPage",
    "snapType",
    "spacing",
    "translations"
  ]);
  const carousel = useCarousel.useCarousel(useCarouselProps);
  const mergedProps = react$1.mergeProps(carousel.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useCarouselContext.CarouselProvider, { value: carousel, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
CarouselRoot.displayName = "CarouselRoot";

exports.CarouselRoot = CarouselRoot;
