'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useRadioGroupContext } from './use-radio-group-context.js';
import { useRadioGroupItemPropsContext } from './use-radio-group-item-props-context.js';

const RadioGroupItemText = forwardRef((props, ref) => {
  const radioGroup = useRadioGroupContext();
  const itemProps = useRadioGroupItemPropsContext();
  const mergedProps = mergeProps(radioGroup.getItemTextProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
RadioGroupItemText.displayName = "RadioGroupItemText";

export { RadioGroupItemText };
