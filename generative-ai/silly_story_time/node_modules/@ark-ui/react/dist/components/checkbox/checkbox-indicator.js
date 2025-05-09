'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCheckboxContext } from './use-checkbox-context.js';

const CheckboxIndicator = forwardRef((props, ref) => {
  const { indeterminate, ...rest } = props;
  const checkbox = useCheckboxContext();
  const mergedProps = mergeProps(checkbox.getIndicatorProps(), rest);
  const isVisible = indeterminate ? checkbox.indeterminate : checkbox.checked;
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, hidden: !isVisible, ref });
});
CheckboxIndicator.displayName = "CheckboxIndicator";

export { CheckboxIndicator };
