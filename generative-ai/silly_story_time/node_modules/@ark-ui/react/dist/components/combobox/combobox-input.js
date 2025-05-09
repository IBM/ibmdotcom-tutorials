'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useComboboxContext } from './use-combobox-context.js';

const ComboboxInput = forwardRef((props, ref) => {
  const combobox = useComboboxContext();
  const mergedProps = mergeProps(combobox.getInputProps(), props);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
ComboboxInput.displayName = "ComboboxInput";

export { ComboboxInput };
