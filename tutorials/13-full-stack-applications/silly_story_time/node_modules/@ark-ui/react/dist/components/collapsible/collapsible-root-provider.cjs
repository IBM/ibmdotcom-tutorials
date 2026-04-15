'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useCollapsibleContext = require('./use-collapsible-context.cjs');

const CollapsibleRootProvider = react.forwardRef((props, ref) => {
  const [{ value: collapsible }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(collapsible.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useCollapsibleContext.CollapsibleProvider, { value: collapsible, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
CollapsibleRootProvider.displayName = "CollapsibleRootProvider";

exports.CollapsibleRootProvider = CollapsibleRootProvider;
