'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSelectContext = require('./use-select-context.cjs');
const useSelectItemGroupProps = require('./use-select-item-group-props.cjs');

const SelectItemGroupLabel = react.forwardRef((props, ref) => {
  const select = useSelectContext.useSelectContext();
  const itemGroupProps = useSelectItemGroupProps.useSelectItemGroupPropsContext();
  const mergedProps = react$1.mergeProps(select.getItemGroupLabelProps({ htmlFor: itemGroupProps.id }), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
SelectItemGroupLabel.displayName = "SelectItemGroupLabel";

exports.SelectItemGroupLabel = SelectItemGroupLabel;
