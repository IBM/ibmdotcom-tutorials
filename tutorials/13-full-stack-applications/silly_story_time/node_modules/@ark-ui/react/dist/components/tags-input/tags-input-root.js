'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useTagsInput } from './use-tags-input.js';
import { TagsInputProvider } from './use-tags-input-context.js';

const TagsInputRoot = forwardRef((props, ref) => {
  const [useTagsInputProps, localProps] = createSplitProps()(props, [
    "addOnPaste",
    "allowOverflow",
    "autoFocus",
    "blurBehavior",
    "defaultInputValue",
    "defaultValue",
    "delimiter",
    "disabled",
    "editable",
    "form",
    "id",
    "ids",
    "inputValue",
    "invalid",
    "max",
    "maxLength",
    "name",
    "onFocusOutside",
    "onHighlightChange",
    "onInputValueChange",
    "onInteractOutside",
    "onPointerDownOutside",
    "onValueChange",
    "onValueInvalid",
    "readOnly",
    "required",
    "translations",
    "validate",
    "value"
  ]);
  const tagsInput = useTagsInput(useTagsInputProps);
  const mergedProps = mergeProps(tagsInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(TagsInputProvider, { value: tagsInput, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
TagsInputRoot.displayName = "TagsInputRoot";

export { TagsInputRoot };
