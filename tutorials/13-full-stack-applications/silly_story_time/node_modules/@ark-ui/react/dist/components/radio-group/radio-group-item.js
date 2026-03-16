'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useRadioGroupContext } from './use-radio-group-context.js';
import { RadioGroupItemProvider } from './use-radio-group-item-context.js';
import { RadioGroupItemPropsProvider } from './use-radio-group-item-props-context.js';

const RadioGroupItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["value", "disabled", "invalid"]);
  const radioGroup = useRadioGroupContext();
  const mergedProps = mergeProps(radioGroup.getItemProps(itemProps), localProps);
  const itemState = radioGroup.getItemState(itemProps);
  return /* @__PURE__ */ jsx(RadioGroupItemProvider, { value: itemState, children: /* @__PURE__ */ jsx(RadioGroupItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref }) }) });
});
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroupItem };
