'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useRadioGroupContext } from './use-radio-group-context.js';
import { useRadioGroupItemPropsContext } from './use-radio-group-item-props-context.js';

const RadioGroupItemControl = forwardRef((props, ref) => {
  const radioGroup = useRadioGroupContext();
  const itemProps = useRadioGroupItemPropsContext();
  const mergedProps = mergeProps(radioGroup.getItemControlProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
RadioGroupItemControl.displayName = "RadioGroupItemControl";

export { RadioGroupItemControl };
