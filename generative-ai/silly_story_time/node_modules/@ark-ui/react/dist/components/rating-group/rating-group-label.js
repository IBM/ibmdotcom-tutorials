'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useRatingGroupContext } from './use-rating-group-context.js';

const RatingGroupLabel = forwardRef((props, ref) => {
  const ratingGroup = useRatingGroupContext();
  const mergedProps = mergeProps(ratingGroup.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
RatingGroupLabel.displayName = "RatingGroupLabel";

export { RatingGroupLabel };
