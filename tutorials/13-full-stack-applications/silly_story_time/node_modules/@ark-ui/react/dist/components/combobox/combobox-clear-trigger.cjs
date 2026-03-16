'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useComboboxContext = require('./use-combobox-context.cjs');

const ComboboxClearTrigger = react.forwardRef((props, ref) => {
  const combobox = useComboboxContext.useComboboxContext();
  const mergedProps = react$1.mergeProps(combobox.getClearTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
ComboboxClearTrigger.displayName = "ComboboxClearTrigger";

exports.ComboboxClearTrigger = ComboboxClearTrigger;
