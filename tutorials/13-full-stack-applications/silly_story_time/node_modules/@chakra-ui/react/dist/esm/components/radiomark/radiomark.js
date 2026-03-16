"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { dataAttr } from '../../utils/attr.js';
import { EMPTY_STYLES } from '../../styled-system/empty.js';
import { chakra } from '../../styled-system/factory.js';
import { useRecipe } from '../../styled-system/use-recipe.js';

const Radiomark = forwardRef(
  function Radiomark2(props, ref) {
    const recipe = useRecipe({ key: "radiomark", recipe: props.recipe });
    const [variantProps, restProps] = recipe.splitVariantProps(props);
    const { checked, disabled, unstyled, children, ...rest } = restProps;
    const styles = unstyled ? EMPTY_STYLES : recipe(variantProps);
    const sharedProps = {
      ref,
      "data-checked": dataAttr(checked),
      "data-disabled": dataAttr(disabled),
      ...rest,
      css: [styles, props.css]
    };
    return /* @__PURE__ */ jsx(chakra.span, { ...sharedProps, children: checked && /* @__PURE__ */ jsx("span", { className: "dot" }) });
  }
);

export { Radiomark };
