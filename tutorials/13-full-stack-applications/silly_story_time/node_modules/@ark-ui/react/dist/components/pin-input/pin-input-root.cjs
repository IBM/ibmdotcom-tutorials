'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const usePinInput = require('./use-pin-input.cjs');
const usePinInputContext = require('./use-pin-input-context.cjs');

const PinInputRoot = react.forwardRef((props, ref) => {
  const [usePinInputProps, localProps] = createSplitProps.createSplitProps()(props, [
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
  const pinInput = usePinInput.usePinInput(usePinInputProps);
  const mergedProps = react$1.mergeProps(pinInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(usePinInputContext.PinInputProvider, { value: pinInput, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
PinInputRoot.displayName = "PinInputRoot";

exports.PinInputRoot = PinInputRoot;
