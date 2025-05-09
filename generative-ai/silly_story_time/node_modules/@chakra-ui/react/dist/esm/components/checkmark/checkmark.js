"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { dataAttr } from '../../utils/attr.js';
import { EMPTY_STYLES } from '../../styled-system/empty.js';
import { chakra } from '../../styled-system/factory.js';
import { useRecipe } from '../../styled-system/use-recipe.js';

const Checkmark = forwardRef(
  function Checkmark2(props, ref) {
    const recipe = useRecipe({ key: "checkmark", recipe: props.recipe });
    const [variantProps, restProps] = recipe.splitVariantProps(props);
    const { checked, indeterminate, disabled, unstyled, children, ...rest } = restProps;
    const styles = unstyled ? EMPTY_STYLES : recipe(variantProps);
    return /* @__PURE__ */ jsx(
      chakra.svg,
      {
        ref,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3px",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "data-state": indeterminate ? "indeterminate" : checked ? "checked" : "unchecked",
        "data-disabled": dataAttr(disabled),
        css: [styles, props.css],
        ...rest,
        children: indeterminate ? /* @__PURE__ */ jsx("path", { d: "M5 12h14" }) : checked ? /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) : null
      }
    );
  }
);

export { Checkmark };
