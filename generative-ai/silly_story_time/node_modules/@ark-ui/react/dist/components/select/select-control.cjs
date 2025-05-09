'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSelectContext = require('./use-select-context.cjs');

const SelectControl = react.forwardRef((props, ref) => {
  const select = useSelectContext.useSelectContext();
  const mergedProps = react$1.mergeProps(select.getControlProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
SelectControl.displayName = "SelectControl";

exports.SelectControl = SelectControl;
