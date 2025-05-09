"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var useSlotRecipe = require('../../styled-system/use-slot-recipe.cjs');
var icons = require('../icons.cjs');

const {
  withProvider,
  withContext,
  useStyles: useStatStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "stat" });
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
      children: /* @__PURE__ */ jsxRuntime.jsx(icons.ArrowUpIcon, {})
    }
  }
);
const StatDownIndicator = withContext("span", "indicator", {
  defaultProps: {
    "data-type": "down",
    children: /* @__PURE__ */ jsxRuntime.jsx(icons.ArrowDownIcon, {})
  }
});
const StatGroup = React.forwardRef(
  function StatGroup2(props, ref) {
    const recipe = useSlotRecipe.useSlotRecipe({ key: "stat" });
    const [variantProps, localProps] = React.useMemo(
      () => recipe.splitVariantProps(props),
      [props, recipe]
    );
    return /* @__PURE__ */ jsxRuntime.jsx(PropsProvider, { value: variantProps, children: /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
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

exports.StatDownIndicator = StatDownIndicator;
exports.StatGroup = StatGroup;
exports.StatHelpText = StatHelpText;
exports.StatLabel = StatLabel;
exports.StatPropsProvider = StatPropsProvider;
exports.StatRoot = StatRoot;
exports.StatUpIndicator = StatUpIndicator;
exports.StatValueText = StatValueText;
exports.StatValueUnit = StatValueUnit;
exports.useStatStyles = useStatStyles;
