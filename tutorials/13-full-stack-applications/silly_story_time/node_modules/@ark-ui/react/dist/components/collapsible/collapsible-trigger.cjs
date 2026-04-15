'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useCollapsibleContext = require('./use-collapsible-context.cjs');

const CollapsibleTrigger = react.forwardRef((props, ref) => {
  const collapsible = useCollapsibleContext.useCollapsibleContext();
  const mergedProps = react$1.mergeProps(collapsible.getTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";

exports.CollapsibleTrigger = CollapsibleTrigger;
