"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var factory = require('../../styled-system/factory.cjs');
var useRecipe = require('../../styled-system/use-recipe.cjs');

const fallbackId = "chakra-skip-nav";
const SkipNavLink = React.forwardRef(
  function SkipNavLink2(props, ref) {
    const recipe = useRecipe.useRecipe({ key: "skipNavLink", recipe: props.recipe });
    const [variantProps, localProps] = recipe.splitVariantProps(props);
    const styles = recipe(variantProps);
    localProps.id || (localProps.id = fallbackId);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.a,
      {
        ...localProps,
        ref,
        href: `#${localProps.id}`,
        css: [styles, props.css]
      }
    );
  }
);

exports.SkipNavLink = SkipNavLink;
exports.fallbackId = fallbackId;
