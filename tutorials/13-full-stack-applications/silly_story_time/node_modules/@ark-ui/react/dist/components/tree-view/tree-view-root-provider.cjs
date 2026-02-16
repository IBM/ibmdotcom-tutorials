'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const renderStrategy = require('../../utils/render-strategy.cjs');
const factory = require('../factory.cjs');
const useTreeViewContext = require('./use-tree-view-context.cjs');

const TreeViewImpl = (props, ref) => {
  const [renderStrategyProps, treeViewProps] = renderStrategy.splitRenderStrategyProps(props);
  const [{ value: treeView }, localProps] = createSplitProps.createSplitProps()(treeViewProps, ["value"]);
  const mergedProps = react$1.mergeProps(treeView.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useTreeViewContext.TreeViewProvider, { value: treeView, children: /* @__PURE__ */ jsxRuntime.jsx(renderStrategy.RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
};
const TreeViewRootProvider = react.forwardRef(TreeViewImpl);

exports.TreeViewRootProvider = TreeViewRootProvider;
