'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { usePinInputContext } from './use-pin-input-context.js';

const PinInputHiddenInput = forwardRef((props, ref) => {
  const pinInput = usePinInputContext();
  const mergedProps = mergeProps(pinInput.getHiddenInputProps(), props);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
PinInputHiddenInput.displayName = "PinInputHiddenInput";

export { PinInputHiddenInput };
