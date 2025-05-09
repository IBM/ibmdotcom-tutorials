'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTagsInputContext = require('./use-tags-input-context.cjs');

const TagsInputClearTrigger = react.forwardRef((props, ref) => {
  const tagsInput = useTagsInputContext.useTagsInputContext();
  const mergedProps = react$1.mergeProps(tagsInput.getClearTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
TagsInputClearTrigger.displayName = "TagsInputClearTrigger";

exports.TagsInputClearTrigger = TagsInputClearTrigger;
