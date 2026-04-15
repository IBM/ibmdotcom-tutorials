'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { ProgressProvider } from './use-progress-context.js';

const ProgressRootProvider = forwardRef((props, ref) => {
  const [{ value: progress }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(progress.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(ProgressProvider, { value: progress, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
ProgressRootProvider.displayName = "ProgressRootProvider";

export { ProgressRootProvider };
