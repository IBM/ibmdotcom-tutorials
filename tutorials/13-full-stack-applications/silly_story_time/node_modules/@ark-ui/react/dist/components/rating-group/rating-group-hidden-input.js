'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useRatingGroupContext } from './use-rating-group-context.js';

const RatingGroupHiddenInput = forwardRef((props, ref) => {
  const ratingGroup = useRatingGroupContext();
  const mergedProps = mergeProps(ratingGroup.getHiddenInputProps(), props);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
RatingGroupHiddenInput.displayName = "RatingGroupHiddenInput";

export { RatingGroupHiddenInput };
