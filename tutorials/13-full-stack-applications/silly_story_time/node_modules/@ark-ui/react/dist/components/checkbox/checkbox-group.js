'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { checkboxAnatomy } from './checkbox.anatomy.js';
import { useCheckboxGroup } from './use-checkbox-group.js';
import { CheckboxGroupContextProvider } from './use-checkbox-group-context.js';

const CheckboxGroup = forwardRef((props, ref) => {
  const [checkboxGroupProps, localProps] = createSplitProps()(props, [
    "defaultValue",
    "value",
    "onValueChange",
    "disabled",
    "invalid",
    "readOnly",
    "name"
  ]);
  const checkboxGroup = useCheckboxGroup(checkboxGroupProps);
  return /* @__PURE__ */ jsx(CheckboxGroupContextProvider, { value: checkboxGroup, children: /* @__PURE__ */ jsx(ark.div, { ref, role: "group", ...localProps, ...checkboxAnatomy.build().group.attrs }) });
});
CheckboxGroup.displayName = "CheckboxGroup";

export { CheckboxGroup };
