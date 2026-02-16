'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from './use-field-context.js';

const FieldInput = forwardRef((props, ref) => {
  const field = useFieldContext();
  const mergedProps = mergeProps(field?.getInputProps(), props);
  return /* @__PURE__ */ jsx(ark.input, { ...mergedProps, ref });
});
FieldInput.displayName = "FieldInput";

export { FieldInput };
