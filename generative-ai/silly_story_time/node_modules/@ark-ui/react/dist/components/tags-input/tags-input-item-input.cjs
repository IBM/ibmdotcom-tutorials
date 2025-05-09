'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTagsInputContext = require('./use-tags-input-context.cjs');
const useTagsInputItemPropsContext = require('./use-tags-input-item-props-context.cjs');

const TagsInputItemInput = react.forwardRef((props, ref) => {
  const tagsInput = useTagsInputContext.useTagsInputContext();
  const itemProps = useTagsInputItemPropsContext.useTagsInputItemPropsContext();
  const mergedProps = react$1.mergeProps(tagsInput.getItemInputProps(itemProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { ...mergedProps, ref });
});
TagsInputItemInput.displayName = "TagsInputItemInput";

exports.TagsInputItemInput = TagsInputItemInput;
