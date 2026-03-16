'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useStepsContext = require('./use-steps-context.cjs');

const StepsContent = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["index"]);
  const steps = useStepsContext.useStepsContext();
  const mergedProps = react$1.mergeProps(steps.getContentProps(itemProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
StepsContent.displayName = "StepsContent";

exports.StepsContent = StepsContent;
