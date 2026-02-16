'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCheckboxContext } from './use-checkbox-context.js';

const CheckboxControl = forwardRef((props, ref) => {
  const checkbox = useCheckboxContext();
  const mergedProps = mergeProps(checkbox.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
CheckboxControl.displayName = "CheckboxControl";

export { CheckboxControl };
