'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { TagsInputProvider } from './use-tags-input-context.js';

const TagsInputRootProvider = forwardRef((props, ref) => {
  const [{ value: tagsInput }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(tagsInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(TagsInputProvider, { value: tagsInput, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
TagsInputRootProvider.displayName = "TagsInputRootProvider";

export { TagsInputRootProvider };
