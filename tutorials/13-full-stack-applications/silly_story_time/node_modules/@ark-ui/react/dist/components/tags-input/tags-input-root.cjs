'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useTagsInput = require('./use-tags-input.cjs');
const useTagsInputContext = require('./use-tags-input-context.cjs');

const TagsInputRoot = react.forwardRef((props, ref) => {
  const [useTagsInputProps, localProps] = createSplitProps.createSplitProps()(props, [
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
  const tagsInput = useTagsInput.useTagsInput(useTagsInputProps);
  const mergedProps = react$1.mergeProps(tagsInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useTagsInputContext.TagsInputProvider, { value: tagsInput, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
TagsInputRoot.displayName = "TagsInputRoot";

exports.TagsInputRoot = TagsInputRoot;
