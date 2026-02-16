'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSwitchContext = require('./use-switch-context.cjs');

const SwitchThumb = react.forwardRef((props, ref) => {
  const switchContext = useSwitchContext.useSwitchContext();
  const mergedProps = react$1.mergeProps(switchContext.getThumbProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref });
});
SwitchThumb.displayName = "SwitchThumb";

exports.SwitchThumb = SwitchThumb;
