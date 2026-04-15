'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useCheckboxContext = require('./use-checkbox-context.cjs');

const CheckboxRootProvider = react.forwardRef((props, ref) => {
  const [{ value: checkbox }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(checkbox.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useCheckboxContext.CheckboxProvider, { value: checkbox, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref }) });
});
CheckboxRootProvider.displayName = "CheckboxRootProvider";

exports.CheckboxRootProvider = CheckboxRootProvider;
