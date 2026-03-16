'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useRatingGroupContext = require('./use-rating-group-context.cjs');

const RatingGroupLabel = react.forwardRef((props, ref) => {
  const ratingGroup = useRatingGroupContext.useRatingGroupContext();
  const mergedProps = react$1.mergeProps(ratingGroup.getLabelProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref });
});
RatingGroupLabel.displayName = "RatingGroupLabel";

exports.RatingGroupLabel = RatingGroupLabel;
