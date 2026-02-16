'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useToggle = require('./use-toggle.cjs');
const useToggleContext = require('./use-toggle-context.cjs');

const ToggleRoot = react.forwardRef((props, ref) => {
  const [useToggleProps, localProps] = createSplitProps.createSplitProps()(props, [
    "pressed",
    "defaultPressed",
    "disabled",
    "onPressedChange"
  ]);
  const toggle = useToggle.useToggle(useToggleProps);
  const mergedProps = react$1.mergeProps(toggle.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useToggleContext.ToggleProvider, { value: toggle, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref }) });
});
ToggleRoot.displayName = "ToggleRoot";

exports.ToggleRoot = ToggleRoot;
