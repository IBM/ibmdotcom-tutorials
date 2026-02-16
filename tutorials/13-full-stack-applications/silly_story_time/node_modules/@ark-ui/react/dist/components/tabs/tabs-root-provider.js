'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { splitRenderStrategyProps, RenderStrategyPropsProvider } from '../../utils/render-strategy.js';
import { ark } from '../factory.js';
import { TabsProvider } from './use-tabs-context.js';

const TabsRootProvider = forwardRef((props, ref) => {
  const [renderStrategyProps, tabsProps] = splitRenderStrategyProps(props);
  const [{ value: tabs }, localprops] = createSplitProps()(tabsProps, ["value"]);
  const mergedProps = mergeProps(tabs.getRootProps(), localprops);
  return /* @__PURE__ */ jsx(TabsProvider, { value: tabs, children: /* @__PURE__ */ jsx(RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
TabsRootProvider.displayName = "TabsRootProvider";

export { TabsRootProvider };
