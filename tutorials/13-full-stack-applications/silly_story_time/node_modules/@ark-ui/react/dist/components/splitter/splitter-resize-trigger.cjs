'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSplitterContext = require('./use-splitter-context.cjs');

const SplitterResizeTrigger = react.forwardRef((props, ref) => {
  const [triggerProps, localProps] = createSplitProps.createSplitProps()(props, ["disabled", "id"]);
  const splitter = useSplitterContext.useSplitterContext();
  const mergedProps = react$1.mergeProps(splitter.getResizeTriggerProps(triggerProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ref, ...mergedProps });
});
SplitterResizeTrigger.displayName = "SplitterResizeTrigger";

exports.SplitterResizeTrigger = SplitterResizeTrigger;
