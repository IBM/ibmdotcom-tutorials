'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useCarouselContext = require('./use-carousel-context.cjs');

const CarouselItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["index", "snapAlign"]);
  const carousel = useCarouselContext.useCarouselContext();
  const mergedProps = react$1.mergeProps(carousel.getItemProps(itemProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
CarouselItem.displayName = "CarouselItem";

exports.CarouselItem = CarouselItem;
