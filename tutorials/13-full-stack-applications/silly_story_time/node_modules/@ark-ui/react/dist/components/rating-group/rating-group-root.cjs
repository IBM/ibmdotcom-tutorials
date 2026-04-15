'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useRatingGroup = require('./use-rating-group.cjs');
const useRatingGroupContext = require('./use-rating-group-context.cjs');

const RatingGroupRoot = react.forwardRef((props, ref) => {
  const [useRatingProps, localProps] = createSplitProps.createSplitProps()(props, [
    "allowHalf",
    "autoFocus",
    "count",
    "defaultValue",
    "disabled",
    "form",
    "id",
    "ids",
    "name",
    "onHoverChange",
    "onValueChange",
    "readOnly",
    "required",
    "translations",
    "value"
  ]);
  const ratingGroup = useRatingGroup.useRatingGroup(useRatingProps);
  const mergedProps = react$1.mergeProps(ratingGroup.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useRatingGroupContext.RatingGroupProvider, { value: ratingGroup, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
RatingGroupRoot.displayName = "RatingGroupRoot";

exports.RatingGroupRoot = RatingGroupRoot;
