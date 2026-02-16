"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ratingGroup = require('@ark-ui/react/rating-group');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var icons = require('../icons.cjs');
var _for = require('../for/for.cjs');

const {
  withProvider,
  withContext,
  useStyles: useRatingGroupStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "ratingGroup" });
const RatingGroupRootProvider = withProvider(ratingGroup.RatingGroup.RootProvider, "root", { forwardAsChild: true });
const RatingGroupRoot = withProvider(ratingGroup.RatingGroup.Root, "root", { forwardAsChild: true });
const RatingGroupPropsProvider = PropsProvider;
const RatingGroupLabel = withContext(ratingGroup.RatingGroup.Label, "label", { forwardAsChild: true });
const RatingGroupItem = withContext(ratingGroup.RatingGroup.Item, "item", { forwardAsChild: true });
function cloneIcon(icon, type) {
  if (!React.isValidElement(icon)) return null;
  const props = { [`data-${type}`]: "", "aria-hidden": "" };
  return React.cloneElement(icon, props);
}
const RatingGroupItemIndicator = React.forwardRef(function RatingGroupItemIndicator2(props, ref) {
  const { icon = /* @__PURE__ */ jsxRuntime.jsx(icons.StarIcon, {}), ...rest } = props;
  const styles = useRatingGroupStyles();
  const itemState = ratingGroup.useRatingGroupItemContext();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    factory.chakra.span,
    {
      ...rest,
      "data-highlighted": itemState.highlighted ? "" : void 0,
      "data-checked": itemState.checked ? "" : void 0,
      "data-half": itemState.half ? "" : void 0,
      css: [styles.itemIndicator, props.css],
      ref,
      children: [
        cloneIcon(icon, "bg"),
        cloneIcon(icon, "fg")
      ]
    }
  );
});
const RatingGroupItems = (props) => {
  const api = ratingGroup.useRatingGroupContext();
  return /* @__PURE__ */ jsxRuntime.jsx(_for.For, { each: api.items, children: (index) => /* @__PURE__ */ jsxRuntime.jsx(RatingGroupItem, { index, ...props, children: /* @__PURE__ */ jsxRuntime.jsx(RatingGroupItemIndicator, {}) }, index) });
};
const RatingGroupControl = withContext(ratingGroup.RatingGroup.Control, "control", {
  forwardAsChild: true,
  defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(RatingGroupItems, {}) }
});
const RatingGroupContext = ratingGroup.RatingGroup.Context;
const RatingGroupItemContext = ratingGroup.RatingGroup.ItemContext;
const RatingGroupHiddenInput = ratingGroup.RatingGroup.HiddenInput;

exports.RatingGroupContext = RatingGroupContext;
exports.RatingGroupControl = RatingGroupControl;
exports.RatingGroupHiddenInput = RatingGroupHiddenInput;
exports.RatingGroupItem = RatingGroupItem;
exports.RatingGroupItemContext = RatingGroupItemContext;
exports.RatingGroupItemIndicator = RatingGroupItemIndicator;
exports.RatingGroupItems = RatingGroupItems;
exports.RatingGroupLabel = RatingGroupLabel;
exports.RatingGroupPropsProvider = RatingGroupPropsProvider;
exports.RatingGroupRoot = RatingGroupRoot;
exports.RatingGroupRootProvider = RatingGroupRootProvider;
exports.useRatingGroupStyles = useRatingGroupStyles;
