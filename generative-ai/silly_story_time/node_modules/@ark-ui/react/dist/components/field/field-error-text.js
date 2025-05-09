'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from './use-field-context.js';

const FieldErrorText = forwardRef((props, ref) => {
  const field = useFieldContext();
  const mergedProps = mergeProps(field.getErrorTextProps(), props);
  if (field?.invalid) {
    return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
  }
  return null;
});
FieldErrorText.displayName = "FieldErrorText";

export { FieldErrorText };
