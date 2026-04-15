"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Editable, useEditableContext } from '@ark-ui/react/editable';
import { ark } from '@ark-ui/react/factory';
import { forwardRef } from 'react';
import { mergeProps } from '../../merge-props.js';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useEditableStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "editable" });
const EditableRootProvider = withProvider(Editable.RootProvider, "root", { forwardAsChild: true });
const EditableRoot = withProvider(
  Editable.Root,
  "root",
  { forwardAsChild: true }
);
const EditablePropsProvider = PropsProvider;
const EditablePreview = withContext(Editable.Preview, "preview", { forwardAsChild: true });
const EditableInput = withContext(
  Editable.Input,
  "input",
  { forwardAsChild: true }
);
const ArkEditableTextarea = forwardRef(function EditableTextarea2(props, ref) {
  const editable = useEditableContext();
  const mergedProps = mergeProps(editable.getInputProps(), props);
  return /* @__PURE__ */ jsx(ark.textarea, { ref, ...mergedProps });
});
const EditableTextarea = withContext(ArkEditableTextarea, "input", { forwardAsChild: true });
const EditableControl = withContext(Editable.Control, "control", { forwardAsChild: true });
const EditableArea = withContext(
  Editable.Area,
  "area",
  { forwardAsChild: true }
);
const EditableEditTrigger = withContext(Editable.EditTrigger, "editTrigger", { forwardAsChild: true });
const EditableSubmitTrigger = withContext(Editable.SubmitTrigger, "submitTrigger", { forwardAsChild: true });
const EditableCancelTrigger = withContext(Editable.CancelTrigger, "cancelTrigger", { forwardAsChild: true });
const EditableContext = Editable.Context;

export { EditableArea, EditableCancelTrigger, EditableContext, EditableControl, EditableEditTrigger, EditableInput, EditablePreview, EditablePropsProvider, EditableRoot, EditableRootProvider, EditableSubmitTrigger, EditableTextarea, useEditableStyles };
