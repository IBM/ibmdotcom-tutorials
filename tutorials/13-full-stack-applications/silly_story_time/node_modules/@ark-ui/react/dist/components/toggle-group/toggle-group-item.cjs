'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useToggleGroupContext = require('./use-toggle-group-context.cjs');

const ToggleGroupItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["value", "disabled"]);
  const toggleGroup = useToggleGroupContext.useToggleGroupContext();
  const mergedProps = react$1.mergeProps(toggleGroup.getItemProps(itemProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
ToggleGroupItem.displayName = "ToggleGroupItem";

exports.ToggleGroupItem = ToggleGroupItem;
