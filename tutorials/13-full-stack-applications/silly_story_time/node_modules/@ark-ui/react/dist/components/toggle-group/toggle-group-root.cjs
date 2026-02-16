'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useToggleGroup = require('./use-toggle-group.cjs');
const useToggleGroupContext = require('./use-toggle-group-context.cjs');

const ToggleGroupRoot = react.forwardRef((props, ref) => {
  const [useToggleGroupProps, localProps] = createSplitProps.createSplitProps()(props, [
    "defaultValue",
    "deselectable",
    "disabled",
    "id",
    "ids",
    "loopFocus",
    "multiple",
    "onValueChange",
    "orientation",
    "rovingFocus",
    "value"
  ]);
  const togglegroup = useToggleGroup.useToggleGroup(useToggleGroupProps);
  const mergedProps = react$1.mergeProps(togglegroup.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useToggleGroupContext.ToggleGroupProvider, { value: togglegroup, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
ToggleGroupRoot.displayName = "ToggleGroupRoot";

exports.ToggleGroupRoot = ToggleGroupRoot;
