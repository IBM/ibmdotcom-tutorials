'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTabsContext } from './use-tabs-context.js';

const TabIndicator = forwardRef((props, ref) => {
  const tabs = useTabsContext();
  const mergedProps = mergeProps(tabs.getIndicatorProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TabIndicator.displayName = "TabIndicator";

export { TabIndicator };
