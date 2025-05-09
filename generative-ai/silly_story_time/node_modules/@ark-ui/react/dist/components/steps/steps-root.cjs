'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSteps = require('./use-steps.cjs');
const useStepsContext = require('./use-steps-context.cjs');

const StepsRoot = react.forwardRef((props, ref) => {
  const [useStepsProps, localProps] = createSplitProps.createSplitProps()(props, [
    "defaultStep",
    "id",
    "ids",
    "count",
    "linear",
    "onStepChange",
    "onStepComplete",
    "orientation",
    "step"
  ]);
  const steps = useSteps.useSteps(useStepsProps);
  const mergedProps = react$1.mergeProps(steps.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useStepsContext.StepsProvider, { value: steps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
StepsRoot.displayName = "StepsRoot";

exports.StepsRoot = StepsRoot;
