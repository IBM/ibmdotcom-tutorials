'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePopoverContext = require('./use-popover-context.cjs');

const PopoverArrow = react.forwardRef((props, ref) => {
  const popover = usePopoverContext.usePopoverContext();
  const mergedProps = react$1.mergeProps(popover.getArrowProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
PopoverArrow.displayName = "PopoverArrow";

exports.PopoverArrow = PopoverArrow;
