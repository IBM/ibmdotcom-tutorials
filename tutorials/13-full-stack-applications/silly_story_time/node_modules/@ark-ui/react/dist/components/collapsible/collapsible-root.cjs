'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const splitCollapsibleProps = require('./split-collapsible-props.cjs');
const useCollapsible = require('./use-collapsible.cjs');
const useCollapsibleContext = require('./use-collapsible-context.cjs');

const CollapsibleRoot = react.forwardRef((props, ref) => {
  const [useCollapsibleProps, localProps] = splitCollapsibleProps.splitCollapsibleProps(props);
  const collapsible = useCollapsible.useCollapsible(useCollapsibleProps);
  const mergedProps = react$1.mergeProps(collapsible.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useCollapsibleContext.CollapsibleProvider, { value: collapsible, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
CollapsibleRoot.displayName = "CollapsibleRoot";

exports.CollapsibleRoot = CollapsibleRoot;
