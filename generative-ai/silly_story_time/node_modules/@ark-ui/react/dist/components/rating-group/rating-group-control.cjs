'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useRatingGroupContext = require('./use-rating-group-context.cjs');

const RatingGroupControl = react.forwardRef((props, ref) => {
  const ratingGroup = useRatingGroupContext.useRatingGroupContext();
  const mergedProps = react$1.mergeProps(ratingGroup.getControlProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
RatingGroupControl.displayName = "RatingGroupControl";

exports.RatingGroupControl = RatingGroupControl;
