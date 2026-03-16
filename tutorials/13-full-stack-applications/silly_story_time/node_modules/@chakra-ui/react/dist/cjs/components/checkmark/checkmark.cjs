"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var attr = require('../../utils/attr.cjs');
var empty = require('../../styled-system/empty.cjs');
var factory = require('../../styled-system/factory.cjs');
var useRecipe = require('../../styled-system/use-recipe.cjs');

const Checkmark = React.forwardRef(
  function Checkmark2(props, ref) {
    const recipe = useRecipe.useRecipe({ key: "checkmark", recipe: props.recipe });
    const [variantProps, restProps] = recipe.splitVariantProps(props);
    const { checked, indeterminate, disabled, unstyled, children, ...rest } = restProps;
    const styles = unstyled ? empty.EMPTY_STYLES : recipe(variantProps);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.svg,
      {
        ref,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3px",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "data-state": indeterminate ? "indeterminate" : checked ? "checked" : "unchecked",
        "data-disabled": attr.dataAttr(disabled),
        css: [styles, props.css],
        ...rest,
        children: indeterminate ? /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 12h14" }) : checked ? /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "20 6 9 17 4 12" }) : null
      }
    );
  }
);

exports.Checkmark = Checkmark;
