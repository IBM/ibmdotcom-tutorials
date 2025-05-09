'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useRatingGroupContext } from './use-rating-group-context.js';
import { RatingGroupItemProvider } from './use-rating-group-item-context.js';

const RatingGroupItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["index"]);
  const ratingGroup = useRatingGroupContext();
  const mergedProps = mergeProps(ratingGroup.getItemProps(itemProps), localProps);
  const itemState = ratingGroup.getItemState(itemProps);
  return /* @__PURE__ */ jsx(RatingGroupItemProvider, { value: itemState, children: /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref }) });
});
RatingGroupItem.displayName = "RatingGroupItem";

export { RatingGroupItem };
