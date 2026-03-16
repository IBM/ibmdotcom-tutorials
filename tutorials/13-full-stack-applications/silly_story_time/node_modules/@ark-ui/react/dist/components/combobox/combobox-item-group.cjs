'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useComboboxContext = require('./use-combobox-context.cjs');
const useComboboxItemGroupPropsContext = require('./use-combobox-item-group-props-context.cjs');

const ComboboxItemGroup = react.forwardRef((props, ref) => {
  const id = react.useId();
  const [_itemGroupProps, localProps] = createSplitProps.createSplitProps()(props, ["id"]);
  const itemGroupProps = { id, ..._itemGroupProps };
  const combobox = useComboboxContext.useComboboxContext();
  const mergedProps = react$1.mergeProps(combobox.getItemGroupProps(itemGroupProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useComboboxItemGroupPropsContext.ComboboxItemGroupPropsProvider, { value: itemGroupProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
ComboboxItemGroup.displayName = "ComboboxItemGroup";

exports.ComboboxItemGroup = ComboboxItemGroup;
