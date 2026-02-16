'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useNumberInputContext = require('./use-number-input-context.cjs');

const NumberInputRootProvider = react.forwardRef((props, ref) => {
  const [{ value: numberInput }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(numberInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useNumberInputContext.NumberInputProvider, { value: numberInput, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
NumberInputRootProvider.displayName = "NumberInputRootProvider";

exports.NumberInputRootProvider = NumberInputRootProvider;
