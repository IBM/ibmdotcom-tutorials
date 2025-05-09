"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var field = require('@ark-ui/react/field');
var React = require('react');
var cx = require('../../utils/cx.cjs');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var createIcon = require('../icon/create-icon.cjs');

const {
  withProvider,
  withContext,
  useStyles: useFieldStyles,
  useClassNames,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "field" });
const FieldRoot = withProvider(
  field.Field.Root,
  "root",
  { forwardAsChild: true }
);
const FieldPropsProvider = PropsProvider;
const FieldLabel = withContext(
  field.Field.Label,
  "label",
  { forwardAsChild: true }
);
const FieldHelperText = withContext(field.Field.HelperText, "helperText", { forwardAsChild: true });
const FieldErrorText = withContext(
  field.Field.ErrorText,
  "errorText",
  { forwardAsChild: true }
);
const FieldErrorIcon = createIcon.createIcon({
  d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
});
const FieldRequiredIndicator = React.forwardRef(function RequiredIndicator(props, ref) {
  const { fallback, children = "*", ...restProps } = props;
  const field$1 = field.useFieldContext();
  const classNames = useClassNames();
  const styles = useFieldStyles();
  if (!field$1?.required) {
    return fallback;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.span,
    {
      ref,
      "aria-hidden": "true",
      ...restProps,
      className: cx.cx(classNames.requiredIndicator, props.className),
      css: [styles.requiredIndicator, props.css],
      children
    }
  );
});

exports.FieldErrorIcon = FieldErrorIcon;
exports.FieldErrorText = FieldErrorText;
exports.FieldHelperText = FieldHelperText;
exports.FieldLabel = FieldLabel;
exports.FieldPropsProvider = FieldPropsProvider;
exports.FieldRequiredIndicator = FieldRequiredIndicator;
exports.FieldRoot = FieldRoot;
exports.useFieldStyles = useFieldStyles;
