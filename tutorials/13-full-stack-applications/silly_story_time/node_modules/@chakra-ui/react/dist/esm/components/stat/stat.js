"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { useSlotRecipe } from '../../styled-system/use-slot-recipe.js';
import { ArrowUpIcon, ArrowDownIcon } from '../icons.js';

const {
  withProvider,
  withContext,
  useStyles: useStatStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "stat" });
const StatRoot = withProvider(
  "dl",
  "root"
);
const StatPropsProvider = PropsProvider;
const StatLabel = withContext("dt", "label");
const StatValueText = withContext(
  "dd",
  "valueText"
);
const StatHelpText = withContext(
  "span",
  "helpText"
);
const StatValueUnit = withContext(
  "span",
  "valueUnit"
);
const StatUpIndicator = withContext(
  "span",
  "indicator",
  {
    defaultProps: {
      "data-type": "up",
      children: /* @__PURE__ */ jsx(ArrowUpIcon, {})
    }
  }
);
const StatDownIndicator = withContext("span", "indicator", {
  defaultProps: {
    "data-type": "down",
    children: /* @__PURE__ */ jsx(ArrowDownIcon, {})
  }
});
const StatGroup = forwardRef(
  function StatGroup2(props, ref) {
    const recipe = useSlotRecipe({ key: "stat" });
    const [variantProps, localProps] = useMemo(
      () => recipe.splitVariantProps(props),
      [props, recipe]
    );
    return /* @__PURE__ */ jsx(PropsProvider, { value: variantProps, children: /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        role: "group",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start",
        ...localProps
      }
    ) });
  }
);

export { StatDownIndicator, StatGroup, StatHelpText, StatLabel, StatPropsProvider, StatRoot, StatUpIndicator, StatValueText, StatValueUnit, useStatStyles };
