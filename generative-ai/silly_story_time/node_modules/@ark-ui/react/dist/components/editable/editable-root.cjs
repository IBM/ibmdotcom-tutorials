'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useEditable = require('./use-editable.cjs');
const useEditableContext = require('./use-editable-context.cjs');

const EditableRoot = react.forwardRef((props, ref) => {
  const [useEditableProps, localProps] = createSplitProps.createSplitProps()(props, [
    "activationMode",
    "autoResize",
    "defaultEdit",
    "defaultValue",
    "disabled",
    "edit",
    "finalFocusEl",
    "form",
    "id",
    "ids",
    "invalid",
    "maxLength",
    "name",
    "onEditChange",
    "onFocusOutside",
    "onInteractOutside",
    "onPointerDownOutside",
    "onValueChange",
    "onValueCommit",
    "onValueRevert",
    "placeholder",
    "readOnly",
    "required",
    "selectOnFocus",
    "submitMode",
    "translations",
    "value"
  ]);
  const editable = useEditable.useEditable(useEditableProps);
  const mergedProps = react$1.mergeProps(editable.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useEditableContext.EditableProvider, { value: editable, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
EditableRoot.displayName = "EditableRoot";

exports.EditableRoot = EditableRoot;
