'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useRatingGroupContext = require('./use-rating-group-context.cjs');
const useRatingGroupItemContext = require('./use-rating-group-item-context.cjs');

const RatingGroupItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["index"]);
  const ratingGroup = useRatingGroupContext.useRatingGroupContext();
  const mergedProps = react$1.mergeProps(ratingGroup.getItemProps(itemProps), localProps);
  const itemState = ratingGroup.getItemState(itemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useRatingGroupItemContext.RatingGroupItemProvider, { value: itemState, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref }) });
});
RatingGroupItem.displayName = "RatingGroupItem";

exports.RatingGroupItem = RatingGroupItem;
