'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useEditable } from './use-editable.js';
import { EditableProvider } from './use-editable-context.js';

const EditableRoot = forwardRef((props, ref) => {
  const [useEditableProps, localProps] = createSplitProps()(props, [
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
  const editable = useEditable(useEditableProps);
  const mergedProps = mergeProps(editable.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(EditableProvider, { value: editable, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
EditableRoot.displayName = "EditableRoot";

export { EditableRoot };
