'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useComboboxContext = require('./use-combobox-context.cjs');
const useComboboxItemContext = require('./use-combobox-item-context.cjs');
const useComboboxItemPropsContext = require('./use-combobox-item-props-context.cjs');

const ComboboxItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["item", "persistFocus"]);
  const combobox = useComboboxContext.useComboboxContext();
  const mergedProps = react$1.mergeProps(combobox.getItemProps(itemProps), localProps);
  const itemState = combobox.getItemState(itemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useComboboxItemPropsContext.ComboboxItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsxRuntime.jsx(useComboboxItemContext.ComboboxItemProvider, { value: itemState, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
ComboboxItem.displayName = "ComboboxItem";

exports.ComboboxItem = ComboboxItem;
