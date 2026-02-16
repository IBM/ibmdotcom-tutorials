'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useToggleContext = require('./use-toggle-context.cjs');

const ToggleIndicator = react.forwardRef((props, ref) => {
  const { children, fallback, ...restProps } = props;
  const toggle = useToggleContext.useToggleContext();
  const mergedProps = react$1.mergeProps(toggle.getIndicatorProps(), restProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref, children: toggle.pressed ? children : fallback });
});
ToggleIndicator.displayName = "ToggleIndicator";

exports.ToggleIndicator = ToggleIndicator;
