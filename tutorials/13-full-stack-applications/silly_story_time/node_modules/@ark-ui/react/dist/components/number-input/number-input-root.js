'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useNumberInput } from './use-number-input.js';
import { NumberInputProvider } from './use-number-input-context.js';

const NumberInputRoot = forwardRef((props, ref) => {
  const [useNumberInputProps, localProps] = createSplitProps()(props, [
    "allowMouseWheel",
    "allowOverflow",
    "clampValueOnBlur",
    "defaultValue",
    "disabled",
    "focusInputOnChange",
    "form",
    "formatOptions",
    "id",
    "ids",
    "inputMode",
    "invalid",
    "locale",
    "max",
    "min",
    "name",
    "onFocusChange",
    "onValueChange",
    "onValueInvalid",
    "pattern",
    "readOnly",
    "required",
    "spinOnPress",
    "step",
    "translations",
    "value"
  ]);
  const numberInput = useNumberInput(useNumberInputProps);
  const mergedProps = mergeProps(numberInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(NumberInputProvider, { value: numberInput, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
NumberInputRoot.displayName = "NumberInputRoot";

export { NumberInputRoot };
