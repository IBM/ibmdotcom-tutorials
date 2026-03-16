'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSelectContext = require('./use-select-context.cjs');

const SelectClearTrigger = react.forwardRef((props, ref) => {
  const select = useSelectContext.useSelectContext();
  const mergedProps = react$1.mergeProps(select.getClearTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
SelectClearTrigger.displayName = "SelectClearTrigger";

exports.SelectClearTrigger = SelectClearTrigger;
