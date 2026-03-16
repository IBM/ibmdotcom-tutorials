'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useRadioGroupContext } from './use-radio-group-context.js';

const RadioGroupLabel = forwardRef((props, ref) => {
  const radioGroup = useRadioGroupContext();
  const mergedProps = mergeProps(radioGroup.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
RadioGroupLabel.displayName = "RadioGroupLabel";

export { RadioGroupLabel };
