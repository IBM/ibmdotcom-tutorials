'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTimerContext = require('./use-timer-context.cjs');

const TimerSeparator = react.forwardRef((props, ref) => {
  const timer = useTimerContext.useTimerContext();
  const mergedProps = react$1.mergeProps(timer.getSeparatorProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
TimerSeparator.displayName = "TimerSeparator";

exports.TimerSeparator = TimerSeparator;
