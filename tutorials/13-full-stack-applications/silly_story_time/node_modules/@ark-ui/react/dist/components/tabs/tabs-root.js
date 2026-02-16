'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { splitRenderStrategyProps, RenderStrategyPropsProvider } from '../../utils/render-strategy.js';
import { ark } from '../factory.js';
import { useTabs } from './use-tabs.js';
import { TabsProvider } from './use-tabs-context.js';

const TabsRoot = forwardRef((props, ref) => {
  const [renderStrategyProps, tabsProps] = splitRenderStrategyProps(props);
  const [useTabsProps, localprops] = createSplitProps()(tabsProps, [
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
  const tabs = useTabs(useTabsProps);
  const mergedProps = mergeProps(tabs.getRootProps(), localprops);
  return /* @__PURE__ */ jsx(TabsProvider, { value: tabs, children: /* @__PURE__ */ jsx(RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
TabsRoot.displayName = "TabsRoot";

export { TabsRoot };
