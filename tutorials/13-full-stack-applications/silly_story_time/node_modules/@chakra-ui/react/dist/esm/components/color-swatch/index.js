"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { cx } from '../../utils/cx.js';
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { Grid } from '../grid/grid.js';

const { withPropsProvider, useRecipeResult } = createRecipeContext({
  key: "colorSwatch"
});
const ColorSwatch = forwardRef(
  function ColorSwatch2(props, ref) {
    const { value, ...restProps } = props;
    const { styles, className, props: localProps } = useRecipeResult(restProps);
    return /* @__PURE__ */ jsx(
      chakra.span,
      {
        ...localProps,
        ref,
        "data-value": value,
        css: [styles, { "--color": value }, props.css],
        className: cx(className, props.className)
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
  return /* @__PURE__ */ jsx(ColorSwatch, { overflow: "hidden", ...restProps, value: "transparent", children: /* @__PURE__ */ jsx(Grid, { templateColumns: "var(--swatch-size) var(--swatch-size)", children: items.map((item, index) => {
    const isLast = index === items.length - 1;
    return /* @__PURE__ */ jsx(
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

export { ColorSwatch, ColorSwatchMix, ColorSwatchPropsProvider };
