'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useTagsInputContext = require('./use-tags-input-context.cjs');

const TagsInputRootProvider = react.forwardRef((props, ref) => {
  const [{ value: tagsInput }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(tagsInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useTagsInputContext.TagsInputProvider, { value: tagsInput, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
TagsInputRootProvider.displayName = "TagsInputRootProvider";

exports.TagsInputRootProvider = TagsInputRootProvider;
