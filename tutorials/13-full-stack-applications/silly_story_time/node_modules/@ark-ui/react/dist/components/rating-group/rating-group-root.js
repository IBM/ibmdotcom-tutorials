'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useRatingGroup } from './use-rating-group.js';
import { RatingGroupProvider } from './use-rating-group-context.js';

const RatingGroupRoot = forwardRef((props, ref) => {
  const [useRatingProps, localProps] = createSplitProps()(props, [
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
  const ratingGroup = useRatingGroup(useRatingProps);
  const mergedProps = mergeProps(ratingGroup.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(RatingGroupProvider, { value: ratingGroup, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
RatingGroupRoot.displayName = "RatingGroupRoot";

export { RatingGroupRoot };
