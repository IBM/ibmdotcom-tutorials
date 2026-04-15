'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTagsInputContext } from './use-tags-input-context.js';
import { useTagsInputItemPropsContext } from './use-tags-input-item-props-context.js';

const TagsInputItemText = forwardRef((props, ref) => {
  const tagsInput = useTagsInputContext();
  const itemProps = useTagsInputItemPropsContext();
  const mergedProps = mergeProps(tagsInput.getItemTextProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
TagsInputItemText.displayName = "TagsInputItemText";

export { TagsInputItemText };
