'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { TimerProvider } from './use-timer-context.js';

const TimerRootProvider = forwardRef((props, ref) => {
  const [{ value: timer }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(timer.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(TimerProvider, { value: timer, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
TimerRootProvider.displayName = "TimerRootProvider";

export { TimerRootProvider };
