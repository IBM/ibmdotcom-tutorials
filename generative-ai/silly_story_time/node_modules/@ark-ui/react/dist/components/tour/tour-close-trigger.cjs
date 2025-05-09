'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTourContext = require('./use-tour-context.cjs');

const TourCloseTrigger = react.forwardRef((props, ref) => {
  const tour = useTourContext.useTourContext();
  const mergedProps = react$1.mergeProps(tour.getCloseTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
TourCloseTrigger.displayName = "TourCloseTrigger";

exports.TourCloseTrigger = TourCloseTrigger;
