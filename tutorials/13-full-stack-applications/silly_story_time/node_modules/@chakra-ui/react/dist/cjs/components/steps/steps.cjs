"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var steps = require('@ark-ui/react/steps');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var icons = require('../icons.cjs');

const {
  withProvider,
  withContext,
  useStyles: useStepsStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "steps" });
const StepsRootProvider = withProvider(steps.Steps.RootProvider, "root", { forwardAsChild: true });
const StepsRoot = withProvider(
  steps.Steps.Root,
  "root",
  { forwardAsChild: true }
);
const StepsPropsProvider = PropsProvider;
const StepsList = withContext(
  steps.Steps.List,
  "list",
  { forwardAsChild: true }
);
const StepsItem = withContext(
  steps.Steps.Item,
  "item",
  { forwardAsChild: true }
);
const StepsTrigger = withContext(
  steps.Steps.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const StepsContent = withContext(
  steps.Steps.Content,
  "content",
  { forwardAsChild: true }
);
const StepsCompletedContent = withContext(steps.Steps.CompletedContent, "content");
const StepsNumber = React.forwardRef(
  function StepsNumber2(props, ref) {
    return /* @__PURE__ */ jsxRuntime.jsx(steps.Steps.ItemContext, { children: (api) => /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ref, ...props, children: api.index + 1 }) });
  }
);
const StepsTitle = withContext(
  "div",
  "title"
);
const StepsDescription = withContext("div", "description");
const StepsSeparator = withContext(
  steps.Steps.Separator,
  "separator",
  { forwardAsChild: true }
);
const StepsStatus = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(steps.Steps.ItemContext, { children: (api) => {
    if (api.current) return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.current ?? props.incomplete });
    if (api.completed) return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.complete });
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.incomplete ?? props.current });
  } });
};
const StepsIndicator = withContext(
  steps.Steps.Indicator,
  "indicator",
  {
    forwardAsChild: true,
    defaultProps: {
      children: /* @__PURE__ */ jsxRuntime.jsx(StepsStatus, { complete: /* @__PURE__ */ jsxRuntime.jsx(icons.CheckIcon, {}), incomplete: /* @__PURE__ */ jsxRuntime.jsx(StepsNumber, {}) })
    }
  }
);
const StepsNextTrigger = withContext(steps.Steps.NextTrigger, "nextTrigger", { forwardAsChild: true });
const StepsPrevTrigger = withContext(steps.Steps.PrevTrigger, "prevTrigger", { forwardAsChild: true });
const StepsContext = steps.Steps.Context;
const StepsItemContext = steps.Steps.ItemContext;

exports.StepsCompletedContent = StepsCompletedContent;
exports.StepsContent = StepsContent;
exports.StepsContext = StepsContext;
exports.StepsDescription = StepsDescription;
exports.StepsIndicator = StepsIndicator;
exports.StepsItem = StepsItem;
exports.StepsItemContext = StepsItemContext;
exports.StepsList = StepsList;
exports.StepsNextTrigger = StepsNextTrigger;
exports.StepsNumber = StepsNumber;
exports.StepsPrevTrigger = StepsPrevTrigger;
exports.StepsPropsProvider = StepsPropsProvider;
exports.StepsRoot = StepsRoot;
exports.StepsRootProvider = StepsRootProvider;
exports.StepsSeparator = StepsSeparator;
exports.StepsStatus = StepsStatus;
exports.StepsTitle = StepsTitle;
exports.StepsTrigger = StepsTrigger;
exports.useStepsStyles = useStepsStyles;
