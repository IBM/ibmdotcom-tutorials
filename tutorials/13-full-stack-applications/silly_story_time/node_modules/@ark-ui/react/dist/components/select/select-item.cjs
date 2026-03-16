'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSelectContext = require('./use-select-context.cjs');
const useSelectItemContext = require('./use-select-item-context.cjs');
const useSelectItemPropsContext = require('./use-select-item-props-context.cjs');

const SelectItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["item", "persistFocus"]);
  const select = useSelectContext.useSelectContext();
  const mergedProps = react$1.mergeProps(select.getItemProps(itemProps), localProps);
  const itemState = select.getItemState(itemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSelectItemPropsContext.SelectItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsxRuntime.jsx(useSelectItemContext.SelectItemProvider, { value: itemState, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
SelectItem.displayName = "SelectItem";

exports.SelectItem = SelectItem;
