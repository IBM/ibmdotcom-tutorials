'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTagsInputContext } from './use-tags-input-context.js';

const TagsInputLabel = forwardRef((props, ref) => {
  const tagsInput = useTagsInputContext();
  const mergedProps = mergeProps(tagsInput.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
TagsInputLabel.displayName = "TagsInputLabel";

export { TagsInputLabel };
