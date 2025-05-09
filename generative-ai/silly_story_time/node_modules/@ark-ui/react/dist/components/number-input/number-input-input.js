'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useNumberInputContext } from './use-number-input-context.js';

const NumberInputInput = forwardRef((props, ref) => {
  const numberInput = useNumberInputContext();
  const mergedProps = mergeProps(numberInput.getInputProps(), props);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
NumberInputInput.displayName = "NumberInputInput";

export { NumberInputInput };
