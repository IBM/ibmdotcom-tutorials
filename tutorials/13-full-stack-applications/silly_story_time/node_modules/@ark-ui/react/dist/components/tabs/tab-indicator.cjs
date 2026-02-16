'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTabsContext = require('./use-tabs-context.cjs');

const TabIndicator = react.forwardRef((props, ref) => {
  const tabs = useTabsContext.useTabsContext();
  const mergedProps = react$1.mergeProps(tabs.getIndicatorProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
TabIndicator.displayName = "TabIndicator";

exports.TabIndicator = TabIndicator;
