'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSelectContext = require('./use-select-context.cjs');

const SelectLabel = react.forwardRef((props, ref) => {
  const select = useSelectContext.useSelectContext();
  const mergedProps = react$1.mergeProps(select.getLabelProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref });
});
SelectLabel.displayName = "SelectLabel";

exports.SelectLabel = SelectLabel;
