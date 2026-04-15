'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSplitterContext = require('./use-splitter-context.cjs');

const SplitterPanel = react.forwardRef((props, ref) => {
  const [splitterPanelProps, localProps] = createSplitProps.createSplitProps()(props, ["id"]);
  const splitter = useSplitterContext.useSplitterContext();
  const mergedProps = react$1.mergeProps(splitter.getPanelProps(splitterPanelProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
SplitterPanel.displayName = "SplitterPanel";

exports.SplitterPanel = SplitterPanel;
