'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const usePinInputContext = require('./use-pin-input-context.cjs');

const PinInputInput = react.forwardRef((props, ref) => {
  const [inputProps, localProps] = createSplitProps.createSplitProps()(props, ["index"]);
  const pinInput = usePinInputContext.usePinInputContext();
  const mergedProps = react$1.mergeProps(pinInput.getInputProps(inputProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { ...mergedProps, ref });
});
PinInputInput.displayName = "PinInputInput";

exports.PinInputInput = PinInputInput;
