'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useCheckbox } from './use-checkbox.js';
import { CheckboxProvider } from './use-checkbox-context.js';

const CheckboxRoot = forwardRef((props, ref) => {
  const [useCheckboxProps, localProps] = createSplitProps()(props, [
    "checked",
    "defaultChecked",
    "disabled",
    "form",
    "id",
    "ids",
    "invalid",
    "name",
    "onCheckedChange",
    "readOnly",
    "required",
    "value"
  ]);
  const checkbox = useCheckbox(useCheckboxProps);
  const mergedProps = mergeProps(checkbox.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(CheckboxProvider, { value: checkbox, children: /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref }) });
});
CheckboxRoot.displayName = "CheckboxRoot";

export { CheckboxRoot };
