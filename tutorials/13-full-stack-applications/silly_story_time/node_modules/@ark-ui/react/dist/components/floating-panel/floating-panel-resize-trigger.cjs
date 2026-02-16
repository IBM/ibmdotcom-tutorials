'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useFloatingPanelContext = require('./use-floating-panel-context.cjs');

const FloatingPanelResizeTrigger = react.forwardRef((props, ref) => {
  const [resizeProps, localProps] = createSplitProps.createSplitProps()(props, ["axis"]);
  const floatingPanel = useFloatingPanelContext.useFloatingPanelContext();
  const mergedProps = react$1.mergeProps(floatingPanel.getResizeTriggerProps(resizeProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
FloatingPanelResizeTrigger.displayName = "FloatingPanelResizeTrigger";

exports.FloatingPanelResizeTrigger = FloatingPanelResizeTrigger;
