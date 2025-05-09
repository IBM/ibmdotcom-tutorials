'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useNumberInputContext = require('./use-number-input-context.cjs');

const NumberInputValueText = react.forwardRef((props, ref) => {
  const { children, ...localProps } = props;
  const numberInput = useNumberInputContext.useNumberInputContext();
  const mergedProps = react$1.mergeProps(numberInput.getValueTextProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children: children || numberInput.value });
});
NumberInputValueText.displayName = "NumberInputValueText";

exports.NumberInputValueText = NumberInputValueText;
