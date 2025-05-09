"use strict";
"use client";
import { jsx, jsxs } from 'react/jsx-runtime';
import { RatingGroup, useRatingGroupItemContext, useRatingGroupContext } from '@ark-ui/react/rating-group';
import { forwardRef, isValidElement, cloneElement } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { StarIcon } from '../icons.js';
import { For } from '../for/for.js';

const {
  withProvider,
  withContext,
  useStyles: useRatingGroupStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "ratingGroup" });
const RatingGroupRootProvider = withProvider(RatingGroup.RootProvider, "root", { forwardAsChild: true });
const RatingGroupRoot = withProvider(RatingGroup.Root, "root", { forwardAsChild: true });
const RatingGroupPropsProvider = PropsProvider;
const RatingGroupLabel = withContext(RatingGroup.Label, "label", { forwardAsChild: true });
const RatingGroupItem = withContext(RatingGroup.Item, "item", { forwardAsChild: true });
function cloneIcon(icon, type) {
  if (!isValidElement(icon)) return null;
  const props = { [`data-${type}`]: "", "aria-hidden": "" };
  return cloneElement(icon, props);
}
const RatingGroupItemIndicator = forwardRef(function RatingGroupItemIndicator2(props, ref) {
  const { icon = /* @__PURE__ */ jsx(StarIcon, {}), ...rest } = props;
  const styles = useRatingGroupStyles();
  const itemState = useRatingGroupItemContext();
  return /* @__PURE__ */ jsxs(
    chakra.span,
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
  const api = useRatingGroupContext();
  return /* @__PURE__ */ jsx(For, { each: api.items, children: (index) => /* @__PURE__ */ jsx(RatingGroupItem, { index, ...props, children: /* @__PURE__ */ jsx(RatingGroupItemIndicator, {}) }, index) });
};
const RatingGroupControl = withContext(RatingGroup.Control, "control", {
  forwardAsChild: true,
  defaultProps: { children: /* @__PURE__ */ jsx(RatingGroupItems, {}) }
});
const RatingGroupContext = RatingGroup.Context;
const RatingGroupItemContext = RatingGroup.ItemContext;
const RatingGroupHiddenInput = RatingGroup.HiddenInput;

export { RatingGroupContext, RatingGroupControl, RatingGroupHiddenInput, RatingGroupItem, RatingGroupItemContext, RatingGroupItemIndicator, RatingGroupItems, RatingGroupLabel, RatingGroupPropsProvider, RatingGroupRoot, RatingGroupRootProvider, useRatingGroupStyles };
