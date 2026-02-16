'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTreeViewContext } from './use-tree-view-context.js';

const TreeViewLabel = forwardRef((props, ref) => {
  const treeView = useTreeViewContext();
  const mergedProps = mergeProps(treeView.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
TreeViewLabel.displayName = "TreeViewLabel";

export { TreeViewLabel };
