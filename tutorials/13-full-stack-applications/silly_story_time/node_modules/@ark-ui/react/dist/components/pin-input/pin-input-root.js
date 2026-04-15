'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { usePinInput } from './use-pin-input.js';
import { PinInputProvider } from './use-pin-input-context.js';

const PinInputRoot = forwardRef((props, ref) => {
  const [usePinInputProps, localProps] = createSplitProps()(props, [
    "autoFocus",
    "blurOnComplete",
    "count",
    "defaultValue",
    "disabled",
    "form",
    "id",
    "ids",
    "invalid",
    "mask",
    "name",
    "onValueChange",
    "onValueComplete",
    "onValueInvalid",
    "otp",
    "pattern",
    "placeholder",
    "readOnly",
    "required",
    "selectOnFocus",
    "translations",
    "type",
    "value"
  ]);
  const pinInput = usePinInput(usePinInputProps);
  const mergedProps = mergeProps(pinInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(PinInputProvider, { value: pinInput, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
PinInputRoot.displayName = "PinInputRoot";

export { PinInputRoot };
