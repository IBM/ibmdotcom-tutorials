'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useTimer = require('./use-timer.cjs');
const useTimerContext = require('./use-timer-context.cjs');

const TimerRoot = react.forwardRef((props, ref) => {
  const [useTimerProps, localProps] = createSplitProps.createSplitProps()(props, [
    "id",
    "ids",
    "autoStart",
    "interval",
    "countdown",
    "startMs",
    "targetMs",
    "onComplete",
    "onTick"
  ]);
  const timer = useTimer.useTimer(useTimerProps);
  const mergedProps = react$1.mergeProps(timer.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useTimerContext.TimerProvider, { value: timer, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
TimerRoot.displayName = "TimerRoot";

exports.TimerRoot = TimerRoot;
