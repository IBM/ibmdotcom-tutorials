'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useTabsContext = require('./use-tabs-context.cjs');

const TabTrigger = react.forwardRef((props, ref) => {
  const [tabProps, localProps] = createSplitProps.createSplitProps()(props, ["disabled", "value"]);
  const tabs = useTabsContext.useTabsContext();
  const mergedProps = react$1.mergeProps(tabs.getTriggerProps(tabProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
TabTrigger.displayName = "TabTrigger";

exports.TabTrigger = TabTrigger;
