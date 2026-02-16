'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useTimerContext = require('./use-timer-context.cjs');

const TimerItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["type"]);
  const timer = useTimerContext.useTimerContext();
  const mergedProps = react$1.mergeProps(timer.getItemProps(itemProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref, children: timer.formattedTime[itemProps.type] });
});
TimerItem.displayName = "TimerItem";

exports.TimerItem = TimerItem;
