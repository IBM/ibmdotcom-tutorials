'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from './use-field-context.js';

const FieldLabel = forwardRef((props, ref) => {
  const field = useFieldContext();
  const mergedProps = mergeProps(field?.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
FieldLabel.displayName = "FieldLabel";

export { FieldLabel };
