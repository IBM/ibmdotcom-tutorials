'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSwitchContext = require('./use-switch-context.cjs');

const SwitchControl = react.forwardRef((props, ref) => {
  const switchContext = useSwitchContext.useSwitchContext();
  const mergedProps = react$1.mergeProps(switchContext.getControlProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref });
});
SwitchControl.displayName = "SwitchControl";

exports.SwitchControl = SwitchControl;
