'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useCollapsibleContext = require('./use-collapsible-context.cjs');

const CollapsibleIndicator = react.forwardRef((props, ref) => {
  const collapsible = useCollapsibleContext.useCollapsibleContext();
  const mergedProps = react$1.mergeProps(collapsible.getIndicatorProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
CollapsibleIndicator.displayName = "CollapsibleIndicator";

exports.CollapsibleIndicator = CollapsibleIndicator;
