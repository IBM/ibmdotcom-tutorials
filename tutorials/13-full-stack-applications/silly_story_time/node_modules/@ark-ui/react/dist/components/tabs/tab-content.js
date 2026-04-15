'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { createSplitProps } from '../../utils/create-split-props.js';
import { useRenderStrategyPropsContext } from '../../utils/render-strategy.js';
import { useDebounce } from '../../utils/use-debounce.js';
import { ark } from '../factory.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { useTabsContext } from './use-tabs-context.js';

const TabContent = forwardRef((props, ref) => {
  const [contentProps, localProps] = createSplitProps()(props, ["value"]);
  const tabs = useTabsContext();
  const renderStrategyProps = useRenderStrategyPropsContext();
  const presence = usePresence({
    ...renderStrategyProps,
    present: useDebounce(tabs.value === props.value, 0),
    immediate: true
  });
  const mergedProps = mergeProps(tabs.getContentProps(contentProps), presence.getPresenceProps(), localProps);
  return /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children: presence.unmounted ? null : /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref: composeRefs(presence.ref, ref) }) });
});
TabContent.displayName = "TabContent";

export { TabContent };
