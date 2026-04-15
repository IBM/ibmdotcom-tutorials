'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldContext = require('../field/use-field-context.cjs');
const useSwitchContext = require('./use-switch-context.cjs');

const SwitchHiddenInput = react.forwardRef((props, ref) => {
  const switchContext = useSwitchContext.useSwitchContext();
  const mergedProps = react$1.mergeProps(switchContext.getHiddenInputProps(), props);
  const field = useFieldContext.useFieldContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
SwitchHiddenInput.displayName = "SwitchHiddenInput";

exports.SwitchHiddenInput = SwitchHiddenInput;
