'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useTimerContext } from './use-timer-context.js';

const TimerActionTrigger = forwardRef((props, ref) => {
  const [actionTriggerProps, localProps] = createSplitProps()(props, ["action"]);
  const timer = useTimerContext();
  const mergedProps = mergeProps(timer.getActionTriggerProps(actionTriggerProps), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
TimerActionTrigger.displayName = "TimerActionTrigger";

export { TimerActionTrigger };
