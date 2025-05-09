'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useTimerContext } from './use-timer-context.js';

const TimerItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["type"]);
  const timer = useTimerContext();
  const mergedProps = mergeProps(timer.getItemProps(itemProps), localProps);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref, children: timer.formattedTime[itemProps.type] });
});
TimerItem.displayName = "TimerItem";

export { TimerItem };
