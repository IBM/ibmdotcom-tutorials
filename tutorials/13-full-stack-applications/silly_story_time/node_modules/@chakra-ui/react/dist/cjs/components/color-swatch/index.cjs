"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('../../utils/cx.cjs');
var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var grid = require('../grid/grid.cjs');

const { withPropsProvider, useRecipeResult } = createRecipeContext.createRecipeContext({
  key: "colorSwatch"
});
const ColorSwatch = React.forwardRef(
  function ColorSwatch2(props, ref) {
    const { value, ...restProps } = props;
    const { styles, className, props: localProps } = useRecipeResult(restProps);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.span,
      {
        ...localProps,
        ref,
        "data-value": value,
        css: [styles, { "--color": value }, props.css],
        className: cx.cx(className, props.className)
      }
    );
  }
);
const ColorSwatchPropsProvider = withPropsProvider();
const ColorSwatchMix = (props) => {
  const { items, ...restProps } = props;
  if (items.length > 4) {
    throw new Error("ColorSwatchMix doesn't support more than 4 colors");
  }
  const isThreeColors = items.length === 3;
  return /* @__PURE__ */ jsxRuntime.jsx(ColorSwatch, { overflow: "hidden", ...restProps, value: "transparent", children: /* @__PURE__ */ jsxRuntime.jsx(grid.Grid, { templateColumns: "var(--swatch-size) var(--swatch-size)", children: items.map((item, index) => {
    const isLast = index === items.length - 1;
    return /* @__PURE__ */ jsxRuntime.jsx(
      ColorSwatch,
      {
        size: "inherit",
        rounded: "none",
        value: item,
        boxShadow: "none",
        gridColumn: isThreeColors && isLast ? "span 2 / span 2" : void 0,
        width: isThreeColors && isLast ? "unset" : void 0
      },
      item
    );
  }) }) });
};

exports.ColorSwatch = ColorSwatch;
exports.ColorSwatchMix = ColorSwatchMix;
exports.ColorSwatchPropsProvider = ColorSwatchPropsProvider;
