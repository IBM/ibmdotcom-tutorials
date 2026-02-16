'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldContext = require('../field/use-field-context.cjs');
const useTagsInputContext = require('./use-tags-input-context.cjs');

const TagsInputHiddenInput = react.forwardRef((props, ref) => {
  const tagsInput = useTagsInputContext.useTagsInputContext();
  const mergedProps = react$1.mergeProps(tagsInput.getHiddenInputProps(), props);
  const field = useFieldContext.useFieldContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
TagsInputHiddenInput.displayName = "TagsInputHiddenInput";

exports.TagsInputHiddenInput = TagsInputHiddenInput;
