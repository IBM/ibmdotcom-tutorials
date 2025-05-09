'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTourContext = require('./use-tour-context.cjs');

const TourTitle = react.forwardRef((props, ref) => {
  const tour = useTourContext.useTourContext();
  const mergedProps = react$1.mergeProps(tour.getTitleProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.h2, { ...mergedProps, ref, children: mergedProps.children || tour.step?.title });
});
TourTitle.displayName = "TourTitle";

exports.TourTitle = TourTitle;
