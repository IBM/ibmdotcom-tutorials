'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useSwitchContext } from './use-switch-context.js';

const SwitchHiddenInput = forwardRef((props, ref) => {
  const switchContext = useSwitchContext();
  const mergedProps = mergeProps(switchContext.getHiddenInputProps(), props);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
SwitchHiddenInput.displayName = "SwitchHiddenInput";

export { SwitchHiddenInput };
