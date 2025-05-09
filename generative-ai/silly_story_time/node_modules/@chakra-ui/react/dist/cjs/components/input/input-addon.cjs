"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var empty = require('../../styled-system/empty.cjs');
var factory = require('../../styled-system/factory.cjs');
var useRecipe = require('../../styled-system/use-recipe.cjs');

const InputAddon = React.forwardRef(
  function InputAddon2({ unstyled, ...props }, ref) {
    const recipe = useRecipe.useRecipe({ key: "inputAddon", recipe: props.recipe });
    const [variantProps, localProps] = recipe.splitVariantProps(props);
    const styles = unstyled ? empty.EMPTY_SLOT_STYLES : recipe(variantProps);
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ref, ...localProps, css: [styles, props.css] });
  }
);

exports.InputAddon = InputAddon;
