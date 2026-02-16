'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTagsInputContext } from './use-tags-input-context.js';

const TagsInputControl = forwardRef((props, ref) => {
  const tagsInput = useTagsInputContext();
  const mergedProps = mergeProps(tagsInput.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TagsInputControl.displayName = "TagsInputControl";

export { TagsInputControl };
