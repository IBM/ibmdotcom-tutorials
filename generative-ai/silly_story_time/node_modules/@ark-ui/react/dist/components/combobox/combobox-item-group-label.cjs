'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useComboboxContext = require('./use-combobox-context.cjs');
const useComboboxItemGroupPropsContext = require('./use-combobox-item-group-props-context.cjs');

const ComboboxItemGroupLabel = react.forwardRef((props, ref) => {
  const combobox = useComboboxContext.useComboboxContext();
  const itemGroupProps = useComboboxItemGroupPropsContext.useComboboxItemGroupPropsContext();
  const mergedProps = react$1.mergeProps(combobox.getItemGroupLabelProps({ htmlFor: itemGroupProps.id }), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
ComboboxItemGroupLabel.displayName = "ComboboxItemGroupLabel";

exports.ComboboxItemGroupLabel = ComboboxItemGroupLabel;
