'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useRatingGroupContext = require('./use-rating-group-context.cjs');

const RatingGroupRootProvider = react.forwardRef((props, ref) => {
  const [{ value: ratingGroup }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(ratingGroup.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useRatingGroupContext.RatingGroupProvider, { value: ratingGroup, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
RatingGroupRootProvider.displayName = "RatingGroupRootProvider";

exports.RatingGroupRootProvider = RatingGroupRootProvider;
