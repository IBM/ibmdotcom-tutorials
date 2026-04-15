'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useCollapsibleContext = require('./use-collapsible-context.cjs');

const CollapsibleContent = react.forwardRef((props, ref) => {
  const collapsible = useCollapsibleContext.useCollapsibleContext();
  if (collapsible.isUnmounted) {
    return null;
  }
  const mergedProps = react$1.mergeProps(collapsible.getContentProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
CollapsibleContent.displayName = "CollapsibleContent";

exports.CollapsibleContent = CollapsibleContent;
