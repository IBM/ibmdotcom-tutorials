'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useStepsContext = require('./use-steps-context.cjs');

const StepsRootProvider = react.forwardRef((props, ref) => {
  const [{ value: steps }, rootProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(steps.getRootProps(), rootProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useStepsContext.StepsProvider, { value: steps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref, children: props.children }) });
});
StepsRootProvider.displayName = "StepsRootProvider";

exports.StepsRootProvider = StepsRootProvider;
