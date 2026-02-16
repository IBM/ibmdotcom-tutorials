'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSelectContext = require('./use-select-context.cjs');

const SelectIndicator = react.forwardRef((props, ref) => {
  const select = useSelectContext.useSelectContext();
  const mergedProps = react$1.mergeProps(select.getIndicatorProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
SelectIndicator.displayName = "SelectIndicator";

exports.SelectIndicator = SelectIndicator;
