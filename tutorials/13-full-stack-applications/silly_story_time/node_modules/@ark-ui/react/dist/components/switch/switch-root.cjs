'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSwitch = require('./use-switch.cjs');
const useSwitchContext = require('./use-switch-context.cjs');

const SwitchRoot = react.forwardRef((props, ref) => {
  const [switchProps, localProps] = createSplitProps.createSplitProps()(props, [
    "checked",
    "defaultChecked",
    "disabled",
    "form",
    "id",
    "ids",
    "invalid",
    "label",
    "name",
    "onCheckedChange",
    "readOnly",
    "required",
    "value"
  ]);
  const switchContext = useSwitch.useSwitch(switchProps);
  const mergedProps = react$1.mergeProps(switchContext.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSwitchContext.SwitchProvider, { value: switchContext, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref }) });
});
SwitchRoot.displayName = "SwitchRoot";

exports.SwitchRoot = SwitchRoot;
