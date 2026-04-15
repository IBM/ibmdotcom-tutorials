'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useListboxContext = require('./use-listbox-context.cjs');
const useListboxItemGroupProps = require('./use-listbox-item-group-props.cjs');

const ListboxItemGroupLabel = react.forwardRef((props, ref) => {
  const listbox = useListboxContext.useListboxContext();
  const itemGroupProps = useListboxItemGroupProps.useListboxItemGroupPropsContext();
  const mergedProps = react$1.mergeProps(listbox.getItemGroupLabelProps({ htmlFor: itemGroupProps.id }), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
ListboxItemGroupLabel.displayName = "ListboxItemGroupLabel";

exports.ListboxItemGroupLabel = ListboxItemGroupLabel;
