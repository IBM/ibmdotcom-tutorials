'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { splitRenderStrategyProps, RenderStrategyPropsProvider } from '../../utils/render-strategy.js';
import { ark } from '../factory.js';
import { useTreeView } from './use-tree-view.js';
import { TreeViewProvider } from './use-tree-view-context.js';

const TreeViewImpl = (props, ref) => {
  const [renderStrategyProps, treeViewProps] = splitRenderStrategyProps(props);
  const [useTreeViewProps, localProps] = createSplitProps()(treeViewProps, [
    "collection",
    "defaultExpandedValue",
    "defaultSelectedValue",
    "expandedValue",
    "expandOnClick",
    "focusedValue",
    "id",
    "ids",
    "onExpandedChange",
    "onFocusChange",
    "onSelectionChange",
    "selectedValue",
    "selectionMode",
    "typeahead"
  ]);
  const treeView = useTreeView(useTreeViewProps);
  const mergedProps = mergeProps(treeView.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(TreeViewProvider, { value: treeView, children: /* @__PURE__ */ jsx(RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
};
const TreeViewRoot = forwardRef(TreeViewImpl);

export { TreeViewRoot };
