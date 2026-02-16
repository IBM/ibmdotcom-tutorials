'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useProgress = require('./use-progress.cjs');
const useProgressContext = require('./use-progress-context.cjs');

const ProgressRoot = react.forwardRef((props, ref) => {
  const [progressProps, localProps] = createSplitProps.createSplitProps()(props, [
    "defaultValue",
    "formatOptions",
    "id",
    "ids",
    "locale",
    "max",
    "min",
    "onValueChange",
    "orientation",
    "translations",
    "value"
  ]);
  const progress = useProgress.useProgress(progressProps);
  const mergedProps = react$1.mergeProps(progress.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useProgressContext.ProgressProvider, { value: progress, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
ProgressRoot.displayName = "ProgressRoot";

exports.ProgressRoot = ProgressRoot;
