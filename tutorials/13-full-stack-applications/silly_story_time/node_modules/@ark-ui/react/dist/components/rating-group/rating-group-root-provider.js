'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { RatingGroupProvider } from './use-rating-group-context.js';

const RatingGroupRootProvider = forwardRef((props, ref) => {
  const [{ value: ratingGroup }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(ratingGroup.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(RatingGroupProvider, { value: ratingGroup, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
RatingGroupRootProvider.displayName = "RatingGroupRootProvider";

export { RatingGroupRootProvider };
