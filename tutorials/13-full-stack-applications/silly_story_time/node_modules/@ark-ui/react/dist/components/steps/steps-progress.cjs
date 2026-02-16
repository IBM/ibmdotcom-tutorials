'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useStepsContext = require('./use-steps-context.cjs');

const StepsProgress = react.forwardRef((props, ref) => {
  const steps = useStepsContext.useStepsContext();
  const mergedProps = react$1.mergeProps(steps.getProgressProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
StepsProgress.displayName = "StepsProgress";

exports.StepsProgress = StepsProgress;
