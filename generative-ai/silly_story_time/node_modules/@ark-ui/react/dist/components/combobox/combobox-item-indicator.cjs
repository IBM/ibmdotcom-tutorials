'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useComboboxContext = require('./use-combobox-context.cjs');
const useComboboxItemPropsContext = require('./use-combobox-item-props-context.cjs');

const ComboboxItemIndicator = react.forwardRef((props, ref) => {
  const combobox = useComboboxContext.useComboboxContext();
  const itemProps = useComboboxItemPropsContext.useComboboxItemPropsContext();
  const mergedProps = react$1.mergeProps(combobox.getItemIndicatorProps(itemProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
ComboboxItemIndicator.displayName = "ComboboxItemIndicator";

exports.ComboboxItemIndicator = ComboboxItemIndicator;
