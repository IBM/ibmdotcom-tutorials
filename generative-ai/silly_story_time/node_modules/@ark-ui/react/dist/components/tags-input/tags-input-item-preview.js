'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTagsInputContext } from './use-tags-input-context.js';
import { useTagsInputItemPropsContext } from './use-tags-input-item-props-context.js';

const TagsInputItemPreview = forwardRef((props, ref) => {
  const tagsInput = useTagsInputContext();
  const itemProps = useTagsInputItemPropsContext();
  const mergedProps = mergeProps(tagsInput.getItemPreviewProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TagsInputItemPreview.displayName = "TagsInputItemPreview";

export { TagsInputItemPreview };
