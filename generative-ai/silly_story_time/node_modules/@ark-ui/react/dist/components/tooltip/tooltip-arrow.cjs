'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTooltipContext = require('./use-tooltip-context.cjs');

const TooltipArrow = react.forwardRef((props, ref) => {
  const tooltip = useTooltipContext.useTooltipContext();
  const mergedProps = react$1.mergeProps(tooltip.getArrowProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
TooltipArrow.displayName = "TooltipArrow";

exports.TooltipArrow = TooltipArrow;
