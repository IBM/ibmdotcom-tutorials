"use strict";
"use client";
import { jsx, Fragment } from 'react/jsx-runtime';
import { Steps } from '@ark-ui/react/steps';
import { forwardRef } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { CheckIcon } from '../icons.js';

const {
  withProvider,
  withContext,
  useStyles: useStepsStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "steps" });
const StepsRootProvider = withProvider(Steps.RootProvider, "root", { forwardAsChild: true });
const StepsRoot = withProvider(
  Steps.Root,
  "root",
  { forwardAsChild: true }
);
const StepsPropsProvider = PropsProvider;
const StepsList = withContext(
  Steps.List,
  "list",
  { forwardAsChild: true }
);
const StepsItem = withContext(
  Steps.Item,
  "item",
  { forwardAsChild: true }
);
const StepsTrigger = withContext(
  Steps.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const StepsContent = withContext(
  Steps.Content,
  "content",
  { forwardAsChild: true }
);
const StepsCompletedContent = withContext(Steps.CompletedContent, "content");
const StepsNumber = forwardRef(
  function StepsNumber2(props, ref) {
    return /* @__PURE__ */ jsx(Steps.ItemContext, { children: (api) => /* @__PURE__ */ jsx(chakra.div, { ref, ...props, children: api.index + 1 }) });
  }
);
const StepsTitle = withContext(
  "div",
  "title"
);
const StepsDescription = withContext("div", "description");
const StepsSeparator = withContext(
  Steps.Separator,
  "separator",
  { forwardAsChild: true }
);
const StepsStatus = (props) => {
  return /* @__PURE__ */ jsx(Steps.ItemContext, { children: (api) => {
    if (api.current) return /* @__PURE__ */ jsx(Fragment, { children: props.current ?? props.incomplete });
    if (api.completed) return /* @__PURE__ */ jsx(Fragment, { children: props.complete });
    return /* @__PURE__ */ jsx(Fragment, { children: props.incomplete ?? props.current });
  } });
};
const StepsIndicator = withContext(
  Steps.Indicator,
  "indicator",
  {
    forwardAsChild: true,
    defaultProps: {
      children: /* @__PURE__ */ jsx(StepsStatus, { complete: /* @__PURE__ */ jsx(CheckIcon, {}), incomplete: /* @__PURE__ */ jsx(StepsNumber, {}) })
    }
  }
);
const StepsNextTrigger = withContext(Steps.NextTrigger, "nextTrigger", { forwardAsChild: true });
const StepsPrevTrigger = withContext(Steps.PrevTrigger, "prevTrigger", { forwardAsChild: true });
const StepsContext = Steps.Context;
const StepsItemContext = Steps.ItemContext;

export { StepsCompletedContent, StepsContent, StepsContext, StepsDescription, StepsIndicator, StepsItem, StepsItemContext, StepsList, StepsNextTrigger, StepsNumber, StepsPrevTrigger, StepsPropsProvider, StepsRoot, StepsRootProvider, StepsSeparator, StepsStatus, StepsTitle, StepsTrigger, useStepsStyles };
