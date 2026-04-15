"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { chakra } from '../../styled-system/factory.js';
import { useRecipe } from '../../styled-system/use-recipe.js';

const fallbackId = "chakra-skip-nav";
const SkipNavLink = forwardRef(
  function SkipNavLink2(props, ref) {
    const recipe = useRecipe({ key: "skipNavLink", recipe: props.recipe });
    const [variantProps, localProps] = recipe.splitVariantProps(props);
    const styles = recipe(variantProps);
    localProps.id || (localProps.id = fallbackId);
    return /* @__PURE__ */ jsx(
      chakra.a,
      {
        ...localProps,
        ref,
        href: `#${localProps.id}`,
        css: [styles, props.css]
      }
    );
  }
);

export { SkipNavLink, fallbackId };
