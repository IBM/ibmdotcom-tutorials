'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useSwitch } from './use-switch.js';
import { SwitchProvider } from './use-switch-context.js';

const SwitchRoot = forwardRef((props, ref) => {
  const [switchProps, localProps] = createSplitProps()(props, [
    "checked",
    "defaultChecked",
    "disabled",
    "form",
    "id",
    "ids",
    "invalid",
    "label",
    "name",
    "onCheckedChange",
    "readOnly",
    "required",
    "value"
  ]);
  const switchContext = useSwitch(switchProps);
  const mergedProps = mergeProps(switchContext.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(SwitchProvider, { value: switchContext, children: /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref }) });
});
SwitchRoot.displayName = "SwitchRoot";

export { SwitchRoot };
