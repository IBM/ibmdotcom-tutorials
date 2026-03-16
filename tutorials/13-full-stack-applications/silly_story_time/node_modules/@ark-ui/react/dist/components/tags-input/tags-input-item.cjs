'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useTagsInputContext = require('./use-tags-input-context.cjs');
const useTagsInputItemContext = require('./use-tags-input-item-context.cjs');
const useTagsInputItemPropsContext = require('./use-tags-input-item-props-context.cjs');

const TagsInputItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["index", "disabled", "value"]);
  const tagsInput = useTagsInputContext.useTagsInputContext();
  const mergedProps = react$1.mergeProps(tagsInput.getItemProps(itemProps), localProps);
  const tagsInputItem = tagsInput.getItemState(itemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useTagsInputItemPropsContext.TagsInputItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsxRuntime.jsx(useTagsInputItemContext.TagsInputItemProvider, { value: tagsInputItem, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
TagsInputItem.displayName = "TagsInputItem";

exports.TagsInputItem = TagsInputItem;
