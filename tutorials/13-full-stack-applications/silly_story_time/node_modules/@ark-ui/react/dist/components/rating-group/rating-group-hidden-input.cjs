'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldContext = require('../field/use-field-context.cjs');
const useRatingGroupContext = require('./use-rating-group-context.cjs');

const RatingGroupHiddenInput = react.forwardRef((props, ref) => {
  const ratingGroup = useRatingGroupContext.useRatingGroupContext();
  const mergedProps = react$1.mergeProps(ratingGroup.getHiddenInputProps(), props);
  const field = useFieldContext.useFieldContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
RatingGroupHiddenInput.displayName = "RatingGroupHiddenInput";

exports.RatingGroupHiddenInput = RatingGroupHiddenInput;
