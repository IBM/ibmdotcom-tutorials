'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useNumberInputContext = require('./use-number-input-context.cjs');

const NumberInputControl = react.forwardRef((props, ref) => {
  const numberInput = useNumberInputContext.useNumberInputContext();
  const mergedProps = react$1.mergeProps(numberInput.getControlProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
NumberInputControl.displayName = "NumberInputControl";

exports.NumberInputControl = NumberInputControl;
