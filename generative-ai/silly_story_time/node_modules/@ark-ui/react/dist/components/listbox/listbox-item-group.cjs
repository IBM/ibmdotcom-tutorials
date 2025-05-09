'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useListboxContext = require('./use-listbox-context.cjs');
const useListboxItemGroupProps = require('./use-listbox-item-group-props.cjs');

const ListboxItemGroup = react.forwardRef((props, ref) => {
  const id = react.useId();
  const [_itemGroupProps, localProps] = createSplitProps.createSplitProps()(props, ["id"]);
  const itemGroupProps = { id, ..._itemGroupProps };
  const listbox = useListboxContext.useListboxContext();
  const mergedProps = react$1.mergeProps(listbox.getItemGroupProps(itemGroupProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useListboxItemGroupProps.ListboxItemGroupPropsProvider, { value: itemGroupProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
ListboxItemGroup.displayName = "ListboxItemGroup";

exports.ListboxItemGroup = ListboxItemGroup;
