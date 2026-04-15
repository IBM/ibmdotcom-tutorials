'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const createSplitProps = require('../../utils/create-split-props.cjs');
const useTreeViewNodePropsContext = require('./use-tree-view-node-props-context.cjs');

function TreeViewNodeProvider(props) {
  const [nodeProps, localProps] = createSplitProps.createSplitProps()(props, ["indexPath", "node"]);
  return /* @__PURE__ */ jsxRuntime.jsx(useTreeViewNodePropsContext.TreeViewNodePropsProvider, { value: nodeProps, children: localProps.children });
}

exports.TreeViewNodeProvider = TreeViewNodeProvider;
