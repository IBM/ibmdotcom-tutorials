'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTourContext = require('./use-tour-context.cjs');

const TourArrow = react.forwardRef((props, ref) => {
  const tour = useTourContext.useTourContext();
  const mergedProps = react$1.mergeProps(tour.getArrowProps(), props);
  return tour.step?.arrow ? /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) : null;
});
TourArrow.displayName = "TourArrow";

exports.TourArrow = TourArrow;
