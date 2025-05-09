'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldContext = require('../field/use-field-context.cjs');
const useNumberInputContext = require('./use-number-input-context.cjs');

const NumberInputInput = react.forwardRef((props, ref) => {
  const numberInput = useNumberInputContext.useNumberInputContext();
  const mergedProps = react$1.mergeProps(numberInput.getInputProps(), props);
  const field = useFieldContext.useFieldContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
NumberInputInput.displayName = "NumberInputInput";

exports.NumberInputInput = NumberInputInput;
