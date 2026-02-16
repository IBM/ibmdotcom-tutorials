'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const createSplitProps = require('../../utils/create-split-props.cjs');
const renderStrategy = require('../../utils/render-strategy.cjs');
const useDebounce = require('../../utils/use-debounce.cjs');
const factory = require('../factory.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useTabsContext = require('./use-tabs-context.cjs');

const TabContent = react.forwardRef((props, ref) => {
  const [contentProps, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const tabs = useTabsContext.useTabsContext();
  const renderStrategyProps = renderStrategy.useRenderStrategyPropsContext();
  const presence = usePresence.usePresence({
    ...renderStrategyProps,
    present: useDebounce.useDebounce(tabs.value === props.value, 0),
    immediate: true
  });
  const mergedProps = react$1.mergeProps(tabs.getContentProps(contentProps), presence.getPresenceProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children: presence.unmounted ? null : /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref: composeRefs.composeRefs(presence.ref, ref) }) });
});
TabContent.displayName = "TabContent";

exports.TabContent = TabContent;
