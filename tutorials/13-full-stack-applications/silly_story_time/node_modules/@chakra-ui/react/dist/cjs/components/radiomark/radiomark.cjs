"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var attr = require('../../utils/attr.cjs');
var empty = require('../../styled-system/empty.cjs');
var factory = require('../../styled-system/factory.cjs');
var useRecipe = require('../../styled-system/use-recipe.cjs');

const Radiomark = React.forwardRef(
  function Radiomark2(props, ref) {
    const recipe = useRecipe.useRecipe({ key: "radiomark", recipe: props.recipe });
    const [variantProps, restProps] = recipe.splitVariantProps(props);
    const { checked, disabled, unstyled, children, ...rest } = restProps;
    const styles = unstyled ? empty.EMPTY_STYLES : recipe(variantProps);
    const sharedProps = {
      ref,
      "data-checked": attr.dataAttr(checked),
      "data-disabled": attr.dataAttr(disabled),
      ...rest,
      css: [styles, props.css]
    };
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { ...sharedProps, children: checked && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "dot" }) });
  }
);

exports.Radiomark = Radiomark;
