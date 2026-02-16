'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useStepsContext = require('./use-steps-context.cjs');
const useStepsItemPropsContext = require('./use-steps-item-props-context.cjs');

const StepsTrigger = react.forwardRef((props, ref) => {
  const steps = useStepsContext.useStepsContext();
  const itemProps = useStepsItemPropsContext.useStepsItemPropsContext();
  const mergedProps = react$1.mergeProps(steps.getTriggerProps(itemProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
StepsTrigger.displayName = "StepsTrigger";

exports.StepsTrigger = StepsTrigger;
