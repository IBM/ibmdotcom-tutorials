'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePopoverContext = require('./use-popover-context.cjs');

const PopoverIndicator = react.forwardRef((props, ref) => {
  const popover = usePopoverContext.usePopoverContext();
  const mergedProps = react$1.mergeProps(popover.getIndicatorProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
PopoverIndicator.displayName = "PopoverIndicator";

exports.PopoverIndicator = PopoverIndicator;
