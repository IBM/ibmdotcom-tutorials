'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const checkbox_anatomy = require('./checkbox.anatomy.cjs');
const useCheckboxGroup = require('./use-checkbox-group.cjs');
const useCheckboxGroupContext = require('./use-checkbox-group-context.cjs');

const CheckboxGroup = react.forwardRef((props, ref) => {
  const [checkboxGroupProps, localProps] = createSplitProps.createSplitProps()(props, [
    "defaultValue",
    "value",
    "onValueChange",
    "disabled",
    "invalid",
    "readOnly",
    "name"
  ]);
  const checkboxGroup = useCheckboxGroup.useCheckboxGroup(checkboxGroupProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useCheckboxGroupContext.CheckboxGroupContextProvider, { value: checkboxGroup, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ref, role: "group", ...localProps, ...checkbox_anatomy.checkboxAnatomy.build().group.attrs }) });
});
CheckboxGroup.displayName = "CheckboxGroup";

exports.CheckboxGroup = CheckboxGroup;
