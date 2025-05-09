'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTimerContext } from './use-timer-context.js';

const TimerControl = forwardRef((props, ref) => {
  const timer = useTimerContext();
  const mergedProps = mergeProps(timer.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TimerControl.displayName = "TimerControl";

export { TimerControl };
