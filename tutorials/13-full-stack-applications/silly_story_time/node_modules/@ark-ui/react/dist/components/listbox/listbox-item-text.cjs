'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useListboxContext = require('./use-listbox-context.cjs');
const useListboxItemPropsContext = require('./use-listbox-item-props-context.cjs');

const ListboxItemText = react.forwardRef((props, ref) => {
  const listbox = useListboxContext.useListboxContext();
  const itemProps = useListboxItemPropsContext.useListboxItemPropsContext();
  const mergedProps = react$1.mergeProps(listbox.getItemTextProps(itemProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
ListboxItemText.displayName = "ListboxItemText";

exports.ListboxItemText = ListboxItemText;
