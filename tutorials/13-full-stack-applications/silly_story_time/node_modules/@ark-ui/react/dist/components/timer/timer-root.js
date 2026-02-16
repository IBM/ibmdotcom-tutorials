'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useTimer } from './use-timer.js';
import { TimerProvider } from './use-timer-context.js';

const TimerRoot = forwardRef((props, ref) => {
  const [useTimerProps, localProps] = createSplitProps()(props, [
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
  const timer = useTimer(useTimerProps);
  const mergedProps = mergeProps(timer.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(TimerProvider, { value: timer, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
TimerRoot.displayName = "TimerRoot";

export { TimerRoot };
