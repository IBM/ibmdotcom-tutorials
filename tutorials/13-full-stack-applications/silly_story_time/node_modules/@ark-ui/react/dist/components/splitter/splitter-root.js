'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useSplitter } from './use-splitter.js';
import { SplitterProvider } from './use-splitter-context.js';

const SplitterRoot = forwardRef((props, ref) => {
  const [useSplitterProps, localProps] = createSplitProps()(props, [
    "defaultSize",
    "id",
    "ids",
    "keyboardResizeBy",
    "nonce",
    "onCollapse",
    "onExpand",
    "onResize",
    "onResizeEnd",
    "onResizeStart",
    "orientation",
    "panels",
    "size"
  ]);
  const splitter = useSplitter(useSplitterProps);
  const mergedProps = mergeProps(splitter.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(SplitterProvider, { value: splitter, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
SplitterRoot.displayName = "SplitterRoot";

export { SplitterRoot };
