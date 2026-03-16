'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePopoverContext = require('./use-popover-context.cjs');

const PopoverCloseTrigger = react.forwardRef((props, ref) => {
  const popover = usePopoverContext.usePopoverContext();
  const mergedProps = react$1.mergeProps(popover.getCloseTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
PopoverCloseTrigger.displayName = "PopoverCloseTrigger";

exports.PopoverCloseTrigger = PopoverCloseTrigger;
