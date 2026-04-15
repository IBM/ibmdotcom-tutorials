'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useRadioGroup } from './use-radio-group.js';
import { RadioGroupProvider } from './use-radio-group-context.js';

const RadioGroupRoot = forwardRef((props, ref) => {
  const [useRadioGroupProps, localProps] = createSplitProps()(props, [
    "defaultValue",
    "disabled",
    "form",
    "id",
    "ids",
    "name",
    "onValueChange",
    "orientation",
    "readOnly",
    "value"
  ]);
  const radioGroup = useRadioGroup(useRadioGroupProps);
  const mergedProps = mergeProps(radioGroup.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(RadioGroupProvider, { value: radioGroup, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
RadioGroupRoot.displayName = "RadioGroupRoot";

export { RadioGroupRoot };
