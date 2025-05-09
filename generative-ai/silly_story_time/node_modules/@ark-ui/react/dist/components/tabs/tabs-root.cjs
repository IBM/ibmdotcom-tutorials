'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const renderStrategy = require('../../utils/render-strategy.cjs');
const factory = require('../factory.cjs');
const useTabs = require('./use-tabs.cjs');
const useTabsContext = require('./use-tabs-context.cjs');

const TabsRoot = react.forwardRef((props, ref) => {
  const [renderStrategyProps, tabsProps] = renderStrategy.splitRenderStrategyProps(props);
  const [useTabsProps, localprops] = createSplitProps.createSplitProps()(tabsProps, [
    "activationMode",
    "composite",
    "defaultValue",
    "deselectable",
    "id",
    "ids",
    "loopFocus",
    "navigate",
    "onFocusChange",
    "onValueChange",
    "orientation",
    "translations",
    "value"
  ]);
  const tabs = useTabs.useTabs(useTabsProps);
  const mergedProps = react$1.mergeProps(tabs.getRootProps(), localprops);
  return /* @__PURE__ */ jsxRuntime.jsx(useTabsContext.TabsProvider, { value: tabs, children: /* @__PURE__ */ jsxRuntime.jsx(renderStrategy.RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
TabsRoot.displayName = "TabsRoot";

exports.TabsRoot = TabsRoot;
