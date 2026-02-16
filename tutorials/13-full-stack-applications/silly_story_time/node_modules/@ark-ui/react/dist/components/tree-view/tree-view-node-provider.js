'use client';
import { jsx } from 'react/jsx-runtime';
import { createSplitProps } from '../../utils/create-split-props.js';
import { TreeViewNodePropsProvider } from './use-tree-view-node-props-context.js';

function TreeViewNodeProvider(props) {
  const [nodeProps, localProps] = createSplitProps()(props, ["indexPath", "node"]);
  return /* @__PURE__ */ jsx(TreeViewNodePropsProvider, { value: nodeProps, children: localProps.children });
}

export { TreeViewNodeProvider };
