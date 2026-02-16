'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useListboxContext = require('./use-listbox-context.cjs');
const useListboxItemContext = require('./use-listbox-item-context.cjs');
const useListboxItemPropsContext = require('./use-listbox-item-props-context.cjs');

const ListboxItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["item", "highlightOnHover"]);
  const listbox = useListboxContext.useListboxContext();
  const mergedProps = react$1.mergeProps(listbox.getItemProps(itemProps), localProps);
  const itemState = listbox.getItemState(itemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useListboxItemPropsContext.ListboxItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsxRuntime.jsx(useListboxItemContext.ListboxItemProvider, { value: itemState, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
ListboxItem.displayName = "ListboxItem";

exports.ListboxItem = ListboxItem;
