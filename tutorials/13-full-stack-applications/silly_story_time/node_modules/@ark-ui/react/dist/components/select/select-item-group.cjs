'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSelectContext = require('./use-select-context.cjs');
const useSelectItemGroupProps = require('./use-select-item-group-props.cjs');

const SelectItemGroup = react.forwardRef((props, ref) => {
  const id = react.useId();
  const [_itemGroupProps, localProps] = createSplitProps.createSplitProps()(props, ["id"]);
  const itemGroupProps = { id, ..._itemGroupProps };
  const select = useSelectContext.useSelectContext();
  const mergedProps = react$1.mergeProps(select.getItemGroupProps(itemGroupProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSelectItemGroupProps.SelectItemGroupPropsProvider, { value: itemGroupProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
SelectItemGroup.displayName = "SelectItemGroup";

exports.SelectItemGroup = SelectItemGroup;
