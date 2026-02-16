'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useTimerContext = require('./use-timer-context.cjs');

const TimerActionTrigger = react.forwardRef((props, ref) => {
  const [actionTriggerProps, localProps] = createSplitProps.createSplitProps()(props, ["action"]);
  const timer = useTimerContext.useTimerContext();
  const mergedProps = react$1.mergeProps(timer.getActionTriggerProps(actionTriggerProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
TimerActionTrigger.displayName = "TimerActionTrigger";

exports.TimerActionTrigger = TimerActionTrigger;
