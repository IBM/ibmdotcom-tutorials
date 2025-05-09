'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { StepsProvider } from './use-steps-context.js';

const StepsRootProvider = forwardRef((props, ref) => {
  const [{ value: steps }, rootProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(steps.getRootProps(), rootProps);
  return /* @__PURE__ */ jsx(StepsProvider, { value: steps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref, children: props.children }) });
});
StepsRootProvider.displayName = "StepsRootProvider";

export { StepsRootProvider };
