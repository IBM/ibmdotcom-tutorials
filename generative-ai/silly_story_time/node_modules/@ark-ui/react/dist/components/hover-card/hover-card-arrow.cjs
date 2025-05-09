'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useHoverCardContext = require('./use-hover-card-context.cjs');

const HoverCardArrow = react.forwardRef((props, ref) => {
  const hoverCard = useHoverCardContext.useHoverCardContext();
  const mergedProps = react$1.mergeProps(hoverCard.getArrowProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
HoverCardArrow.displayName = "HoverCardArrow";

exports.HoverCardArrow = HoverCardArrow;
