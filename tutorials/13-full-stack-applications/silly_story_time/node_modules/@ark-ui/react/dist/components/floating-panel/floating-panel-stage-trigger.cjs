'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useFloatingPanelContext = require('./use-floating-panel-context.cjs');

const FloatingPanelStageTrigger = react.forwardRef((props, ref) => {
  const [stage, localProps] = createSplitProps.createSplitProps()(props, ["stage"]);
  const floatingPanel = useFloatingPanelContext.useFloatingPanelContext();
  const mergedProps = react$1.mergeProps(floatingPanel.getStageTriggerProps(stage), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
FloatingPanelStageTrigger.displayName = "FloatingPanelStageTrigger";

exports.FloatingPanelStageTrigger = FloatingPanelStageTrigger;
