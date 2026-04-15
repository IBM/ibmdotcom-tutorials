'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useRatingGroupContext } from './use-rating-group-context.js';

const RatingGroupControl = forwardRef((props, ref) => {
  const ratingGroup = useRatingGroupContext();
  const mergedProps = mergeProps(ratingGroup.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
RatingGroupControl.displayName = "RatingGroupControl";

export { RatingGroupControl };
