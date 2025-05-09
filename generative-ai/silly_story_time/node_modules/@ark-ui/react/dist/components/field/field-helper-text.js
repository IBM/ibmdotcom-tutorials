'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from './use-field-context.js';

const FieldHelperText = forwardRef((props, ref) => {
  const field = useFieldContext();
  const mergedProps = mergeProps(field?.getHelperTextProps(), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
FieldHelperText.displayName = "FieldHelperText";

export { FieldHelperText };
