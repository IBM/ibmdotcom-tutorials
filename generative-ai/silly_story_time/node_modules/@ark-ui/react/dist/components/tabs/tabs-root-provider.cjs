'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const renderStrategy = require('../../utils/render-strategy.cjs');
const factory = require('../factory.cjs');
const useTabsContext = require('./use-tabs-context.cjs');

const TabsRootProvider = react.forwardRef((props, ref) => {
  const [renderStrategyProps, tabsProps] = renderStrategy.splitRenderStrategyProps(props);
  const [{ value: tabs }, localprops] = createSplitProps.createSplitProps()(tabsProps, ["value"]);
  const mergedProps = react$1.mergeProps(tabs.getRootProps(), localprops);
  return /* @__PURE__ */ jsxRuntime.jsx(useTabsContext.TabsProvider, { value: tabs, children: /* @__PURE__ */ jsxRuntime.jsx(renderStrategy.RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
TabsRootProvider.displayName = "TabsRootProvider";

exports.TabsRootProvider = TabsRootProvider;
