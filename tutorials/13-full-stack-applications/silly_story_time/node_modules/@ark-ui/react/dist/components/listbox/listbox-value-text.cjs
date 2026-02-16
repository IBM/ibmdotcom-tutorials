'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useListboxContext = require('./use-listbox-context.cjs');

const ListboxValueText = react.forwardRef((props, ref) => {
  const { children, placeholder, ...localprops } = props;
  const listbox = useListboxContext.useListboxContext();
  const mergedProps = react$1.mergeProps(listbox.getValueTextProps(), localprops);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children: children || listbox.valueAsString || placeholder });
});
ListboxValueText.displayName = "ListboxValueText";

exports.ListboxValueText = ListboxValueText;
