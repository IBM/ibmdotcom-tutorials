'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useStepsContext = require('./use-steps-context.cjs');
const useStepsItemContext = require('./use-steps-item-context.cjs');
const useStepsItemPropsContext = require('./use-steps-item-props-context.cjs');

const StepsItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["index"]);
  const steps = useStepsContext.useStepsContext();
  const mergedProps = react$1.mergeProps(steps.getItemProps(itemProps), localProps);
  const itemState = steps.getItemState(itemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useStepsItemPropsContext.StepsItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsxRuntime.jsx(useStepsItemContext.StepsItemProvider, { value: itemState, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
StepsItem.displayName = "StepsItem";

exports.StepsItem = StepsItem;
