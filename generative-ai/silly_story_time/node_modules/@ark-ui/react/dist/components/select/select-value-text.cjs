'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSelectContext = require('./use-select-context.cjs');

const SelectValueText = react.forwardRef((props, ref) => {
  const { children, placeholder, ...localprops } = props;
  const select = useSelectContext.useSelectContext();
  const mergedProps = react$1.mergeProps(select.getValueTextProps(), localprops);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children: children || select.valueAsString || placeholder });
});
SelectValueText.displayName = "SelectValueText";

exports.SelectValueText = SelectValueText;
