'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTimerContext } from './use-timer-context.js';

const TimerSeparator = forwardRef((props, ref) => {
  const timer = useTimerContext();
  const mergedProps = mergeProps(timer.getSeparatorProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TimerSeparator.displayName = "TimerSeparator";

export { TimerSeparator };
