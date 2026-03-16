'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSelectContext = require('./use-select-context.cjs');
const useSelectItemPropsContext = require('./use-select-item-props-context.cjs');

const SelectItemText = react.forwardRef((props, ref) => {
  const select = useSelectContext.useSelectContext();
  const itemProps = useSelectItemPropsContext.useSelectItemPropsContext();
  const mergedProps = react$1.mergeProps(select.getItemTextProps(itemProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref });
});
SelectItemText.displayName = "SelectItemText";

exports.SelectItemText = SelectItemText;
