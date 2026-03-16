'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldContext = require('../field/use-field-context.cjs');
const useComboboxContext = require('./use-combobox-context.cjs');

const ComboboxInput = react.forwardRef((props, ref) => {
  const combobox = useComboboxContext.useComboboxContext();
  const mergedProps = react$1.mergeProps(combobox.getInputProps(), props);
  const field = useFieldContext.useFieldContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
ComboboxInput.displayName = "ComboboxInput";

exports.ComboboxInput = ComboboxInput;
