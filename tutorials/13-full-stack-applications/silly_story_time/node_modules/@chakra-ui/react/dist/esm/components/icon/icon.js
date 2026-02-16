"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { cx } from '../../utils/cx.js';
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';

const { useRecipeResult, PropsProvider } = createRecipeContext({ key: "icon" });
const Icon = React.forwardRef(
  function Icon2(props, ref) {
    const {
      styles,
      className,
      props: otherProps
    } = useRecipeResult({ asChild: !props.as, ...props });
    return /* @__PURE__ */ jsx(
      chakra.svg,
      {
        ref,
        focusable: false,
        "aria-hidden": "true",
        ...otherProps,
        css: [styles, props.css],
        className: cx(className, props.className)
      }
    );
  }
);
const IconPropsProvider = PropsProvider;

export { Icon, IconPropsProvider };
