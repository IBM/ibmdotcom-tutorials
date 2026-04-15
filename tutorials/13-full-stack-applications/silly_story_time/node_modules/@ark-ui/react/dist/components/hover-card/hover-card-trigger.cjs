'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useHoverCardContext = require('./use-hover-card-context.cjs');

const HoverCardTrigger = react.forwardRef((props, ref) => {
  const hoverCard = useHoverCardContext.useHoverCardContext();
  const mergedProps = react$1.mergeProps(hoverCard.getTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
HoverCardTrigger.displayName = "HoverCardTrigger";

exports.HoverCardTrigger = HoverCardTrigger;
