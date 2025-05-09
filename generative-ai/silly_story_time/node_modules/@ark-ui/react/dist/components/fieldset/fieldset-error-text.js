'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldsetContext } from './use-fieldset-context.js';

const FieldsetErrorText = forwardRef((props, ref) => {
  const fieldset = useFieldsetContext();
  const mergedProps = mergeProps(fieldset.getErrorTextProps(), props);
  return fieldset.invalid ? /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref }) : null;
});
FieldsetErrorText.displayName = "FieldsetErrorText";

export { FieldsetErrorText };
