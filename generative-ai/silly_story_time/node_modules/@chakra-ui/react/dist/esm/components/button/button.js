"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { mergeProps } from '../../merge-props.js';
import { cx } from '../../utils/cx.js';
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { Loader } from '../loader/loader.js';

const { useRecipeResult, PropsProvider, usePropsContext } = createRecipeContext(
  { key: "button" }
);
const Button = forwardRef(
  function Button2(inProps, ref) {
    const propsContext = usePropsContext();
    const props = useMemo(
      () => mergeProps(propsContext, inProps),
      [propsContext, inProps]
    );
    const result = useRecipeResult(props);
    const {
      loading,
      loadingText,
      children,
      spinner,
      spinnerPlacement,
      ...rest
    } = result.props;
    return /* @__PURE__ */ jsx(
      chakra.button,
      {
        type: "button",
        ref,
        ...rest,
        disabled: loading || rest.disabled,
        className: cx(result.className, props.className),
        css: [result.styles, props.css],
        children: !props.asChild && loading ? /* @__PURE__ */ jsx(
          Loader,
          {
            spinner,
            text: loadingText,
            spinnerPlacement,
            children
          }
        ) : children
      }
    );
  }
);
const ButtonPropsProvider = PropsProvider;

export { Button, ButtonPropsProvider };
