"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { cx } from '../../utils/cx.js';
import { isString } from '../../utils/is.js';
import { omit } from '../../utils/omit.js';
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';

const { useRecipeResult, PropsProvider } = createRecipeContext({
  key: "separator"
});
const Separator = forwardRef(
  function Separator2(props, ref) {
    const { styles, className, props: otherProps } = useRecipeResult(props);
    const orientation = props.orientation || "horizontal";
    return /* @__PURE__ */ jsx(
      chakra.span,
      {
        ref,
        role: isString(orientation) ? "separator" : "presentation",
        "aria-orientation": isString(orientation) ? orientation : void 0,
        ...omit(otherProps, ["orientation"]),
        className: cx(className, props.className),
        css: [styles, props.css]
      }
    );
  }
);
const SeparatorPropsProvider = PropsProvider;

export { Separator, SeparatorPropsProvider };
