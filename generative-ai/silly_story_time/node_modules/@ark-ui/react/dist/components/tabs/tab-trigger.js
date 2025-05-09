'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useTabsContext } from './use-tabs-context.js';

const TabTrigger = forwardRef((props, ref) => {
  const [tabProps, localProps] = createSplitProps()(props, ["disabled", "value"]);
  const tabs = useTabsContext();
  const mergedProps = mergeProps(tabs.getTriggerProps(tabProps), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
TabTrigger.displayName = "TabTrigger";

export { TabTrigger };
