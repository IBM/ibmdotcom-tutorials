'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useCheckbox = require('./use-checkbox.cjs');
const useCheckboxContext = require('./use-checkbox-context.cjs');

const CheckboxRoot = react.forwardRef((props, ref) => {
  const [useCheckboxProps, localProps] = createSplitProps.createSplitProps()(props, [
    "checked",
    "defaultChecked",
    "disabled",
    "form",
    "id",
    "ids",
    "invalid",
    "name",
    "onCheckedChange",
    "readOnly",
    "required",
    "value"
  ]);
  const checkbox = useCheckbox.useCheckbox(useCheckboxProps);
  const mergedProps = react$1.mergeProps(checkbox.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useCheckboxContext.CheckboxProvider, { value: checkbox, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref }) });
});
CheckboxRoot.displayName = "CheckboxRoot";

exports.CheckboxRoot = CheckboxRoot;
