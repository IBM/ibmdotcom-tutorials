"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var editable = require('@ark-ui/react/editable');
var factory = require('@ark-ui/react/factory');
var React = require('react');
var mergeProps = require('../../merge-props.cjs');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useEditableStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "editable" });
const EditableRootProvider = withProvider(editable.Editable.RootProvider, "root", { forwardAsChild: true });
const EditableRoot = withProvider(
  editable.Editable.Root,
  "root",
  { forwardAsChild: true }
);
const EditablePropsProvider = PropsProvider;
const EditablePreview = withContext(editable.Editable.Preview, "preview", { forwardAsChild: true });
const EditableInput = withContext(
  editable.Editable.Input,
  "input",
  { forwardAsChild: true }
);
const ArkEditableTextarea = React.forwardRef(function EditableTextarea2(props, ref) {
  const editable$1 = editable.useEditableContext();
  const mergedProps = mergeProps.mergeProps(editable$1.getInputProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.textarea, { ref, ...mergedProps });
});
const EditableTextarea = withContext(ArkEditableTextarea, "input", { forwardAsChild: true });
const EditableControl = withContext(editable.Editable.Control, "control", { forwardAsChild: true });
const EditableArea = withContext(
  editable.Editable.Area,
  "area",
  { forwardAsChild: true }
);
const EditableEditTrigger = withContext(editable.Editable.EditTrigger, "editTrigger", { forwardAsChild: true });
const EditableSubmitTrigger = withContext(editable.Editable.SubmitTrigger, "submitTrigger", { forwardAsChild: true });
const EditableCancelTrigger = withContext(editable.Editable.CancelTrigger, "cancelTrigger", { forwardAsChild: true });
const EditableContext = editable.Editable.Context;

exports.EditableArea = EditableArea;
exports.EditableCancelTrigger = EditableCancelTrigger;
exports.EditableContext = EditableContext;
exports.EditableControl = EditableControl;
exports.EditableEditTrigger = EditableEditTrigger;
exports.EditableInput = EditableInput;
exports.EditablePreview = EditablePreview;
exports.EditablePropsProvider = EditablePropsProvider;
exports.EditableRoot = EditableRoot;
exports.EditableRootProvider = EditableRootProvider;
exports.EditableSubmitTrigger = EditableSubmitTrigger;
exports.EditableTextarea = EditableTextarea;
exports.useEditableStyles = useEditableStyles;
