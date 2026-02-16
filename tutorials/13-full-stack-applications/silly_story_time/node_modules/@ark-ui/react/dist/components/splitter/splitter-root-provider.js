'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { SplitterProvider } from './use-splitter-context.js';

const SplitterRootProvider = forwardRef((props, ref) => {
  const [{ value: splitter }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(splitter.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(SplitterProvider, { value: splitter, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
SplitterRootProvider.displayName = "SplitterRootProvider";

export { SplitterRootProvider };
