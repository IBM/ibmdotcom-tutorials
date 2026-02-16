'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useCheckboxContext } from './use-checkbox-context.js';

const CheckboxHiddenInput = forwardRef((props, ref) => {
  const checkbox = useCheckboxContext();
  const mergedProps = mergeProps(checkbox.getHiddenInputProps(), props);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
CheckboxHiddenInput.displayName = "CheckboxHiddenInput";

export { CheckboxHiddenInput };
