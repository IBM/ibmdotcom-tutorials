'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCheckboxContext } from './use-checkbox-context.js';

const CheckboxLabel = forwardRef((props, ref) => {
  const checkbox = useCheckboxContext();
  const mergedProps = mergeProps(checkbox.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
CheckboxLabel.displayName = "CheckboxLabel";

export { CheckboxLabel };
