'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useTagsInputContext } from './use-tags-input-context.js';

const TagsInputHiddenInput = forwardRef((props, ref) => {
  const tagsInput = useTagsInputContext();
  const mergedProps = mergeProps(tagsInput.getHiddenInputProps(), props);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
TagsInputHiddenInput.displayName = "TagsInputHiddenInput";

export { TagsInputHiddenInput };
