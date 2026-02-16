'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useListboxContext = require('./use-listbox-context.cjs');

const ListboxLabel = react.forwardRef((props, ref) => {
  const listbox = useListboxContext.useListboxContext();
  const mergedProps = react$1.mergeProps(listbox.getLabelProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref });
});
ListboxLabel.displayName = "ListboxLabel";

exports.ListboxLabel = ListboxLabel;
