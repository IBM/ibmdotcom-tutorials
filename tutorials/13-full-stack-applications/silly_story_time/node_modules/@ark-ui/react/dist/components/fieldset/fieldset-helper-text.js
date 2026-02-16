'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldsetContext } from './use-fieldset-context.js';

const FieldsetHelperText = forwardRef((props, ref) => {
  const fieldset = useFieldsetContext();
  const mergedProps = mergeProps(fieldset.getHelperTextProps(), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
FieldsetHelperText.displayName = "FieldsetHelperText";

export { FieldsetHelperText };
