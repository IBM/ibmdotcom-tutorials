'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useTagsInputContext } from './use-tags-input-context.js';
import { TagsInputItemProvider } from './use-tags-input-item-context.js';
import { TagsInputItemPropsProvider } from './use-tags-input-item-props-context.js';

const TagsInputItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["index", "disabled", "value"]);
  const tagsInput = useTagsInputContext();
  const mergedProps = mergeProps(tagsInput.getItemProps(itemProps), localProps);
  const tagsInputItem = tagsInput.getItemState(itemProps);
  return /* @__PURE__ */ jsx(TagsInputItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsx(TagsInputItemProvider, { value: tagsInputItem, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
TagsInputItem.displayName = "TagsInputItem";

export { TagsInputItem };
