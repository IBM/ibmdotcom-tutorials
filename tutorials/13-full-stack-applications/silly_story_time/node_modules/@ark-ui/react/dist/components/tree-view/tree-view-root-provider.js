'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { splitRenderStrategyProps, RenderStrategyPropsProvider } from '../../utils/render-strategy.js';
import { ark } from '../factory.js';
import { TreeViewProvider } from './use-tree-view-context.js';

const TreeViewImpl = (props, ref) => {
  const [renderStrategyProps, treeViewProps] = splitRenderStrategyProps(props);
  const [{ value: treeView }, localProps] = createSplitProps()(treeViewProps, ["value"]);
  const mergedProps = mergeProps(treeView.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(TreeViewProvider, { value: treeView, children: /* @__PURE__ */ jsx(RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
};
const TreeViewRootProvider = forwardRef(TreeViewImpl);

export { TreeViewRootProvider };
