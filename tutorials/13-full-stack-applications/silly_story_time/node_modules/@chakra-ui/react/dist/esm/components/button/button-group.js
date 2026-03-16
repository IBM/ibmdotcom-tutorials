"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { useRecipe } from '../../styled-system/use-recipe.js';
import { ButtonPropsProvider } from './button.js';
import { Group } from '../group/group.js';

const ButtonGroup = forwardRef(
  function ButtonGroup2(props, ref) {
    const recipe = useRecipe({ key: "button" });
    const [variantProps, otherProps] = useMemo(
      () => recipe.splitVariantProps(props),
      [props, recipe]
    );
    return /* @__PURE__ */ jsx(ButtonPropsProvider, { value: variantProps, children: /* @__PURE__ */ jsx(Group, { ref, ...otherProps }) });
  }
);

export { ButtonGroup };
