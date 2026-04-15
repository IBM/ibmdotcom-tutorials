'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useToggleGroupContext = require('./use-toggle-group-context.cjs');

const ToggleGroupRootProvider = react.forwardRef((props, ref) => {
  const [{ value: toggleGroup }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(toggleGroup.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useToggleGroupContext.ToggleGroupProvider, { value: toggleGroup, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
ToggleGroupRootProvider.displayName = "ToggleGroupRootProvider";

exports.ToggleGroupRootProvider = ToggleGroupRootProvider;
