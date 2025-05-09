"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Field, useFieldContext } from '@ark-ui/react/field';
import { forwardRef } from 'react';
import { cx } from '../../utils/cx.js';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { createIcon } from '../icon/create-icon.js';

const {
  withProvider,
  withContext,
  useStyles: useFieldStyles,
  useClassNames,
  PropsProvider
} = createSlotRecipeContext({ key: "field" });
const FieldRoot = withProvider(
  Field.Root,
  "root",
  { forwardAsChild: true }
);
const FieldPropsProvider = PropsProvider;
const FieldLabel = withContext(
  Field.Label,
  "label",
  { forwardAsChild: true }
);
const FieldHelperText = withContext(Field.HelperText, "helperText", { forwardAsChild: true });
const FieldErrorText = withContext(
  Field.ErrorText,
  "errorText",
  { forwardAsChild: true }
);
const FieldErrorIcon = createIcon({
  d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
});
const FieldRequiredIndicator = forwardRef(function RequiredIndicator(props, ref) {
  const { fallback, children = "*", ...restProps } = props;
  const field = useFieldContext();
  const classNames = useClassNames();
  const styles = useFieldStyles();
  if (!field?.required) {
    return fallback;
  }
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      ref,
      "aria-hidden": "true",
      ...restProps,
      className: cx(classNames.requiredIndicator, props.className),
      css: [styles.requiredIndicator, props.css],
      children
    }
  );
});

export { FieldErrorIcon, FieldErrorText, FieldHelperText, FieldLabel, FieldPropsProvider, FieldRequiredIndicator, FieldRoot, useFieldStyles };
