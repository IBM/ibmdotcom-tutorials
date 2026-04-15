"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { EMPTY_SLOT_STYLES } from '../../styled-system/empty.js';
import { chakra } from '../../styled-system/factory.js';
import { useRecipe } from '../../styled-system/use-recipe.js';

const InputAddon = forwardRef(
  function InputAddon2({ unstyled, ...props }, ref) {
    const recipe = useRecipe({ key: "inputAddon", recipe: props.recipe });
    const [variantProps, localProps] = recipe.splitVariantProps(props);
    const styles = unstyled ? EMPTY_SLOT_STYLES : recipe(variantProps);
    return /* @__PURE__ */ jsx(chakra.div, { ref, ...localProps, css: [styles, props.css] });
  }
);

export { InputAddon };
