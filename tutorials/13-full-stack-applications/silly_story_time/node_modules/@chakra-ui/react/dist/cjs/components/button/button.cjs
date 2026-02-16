"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var mergeProps = require('../../merge-props.cjs');
var cx = require('../../utils/cx.cjs');
var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var loader = require('../loader/loader.cjs');

const { useRecipeResult, PropsProvider, usePropsContext } = createRecipeContext.createRecipeContext(
  { key: "button" }
);
const Button = React.forwardRef(
  function Button2(inProps, ref) {
    const propsContext = usePropsContext();
    const props = React.useMemo(
      () => mergeProps.mergeProps(propsContext, inProps),
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.button,
      {
        type: "button",
        ref,
        ...rest,
        disabled: loading || rest.disabled,
        className: cx.cx(result.className, props.className),
        css: [result.styles, props.css],
        children: !props.asChild && loading ? /* @__PURE__ */ jsxRuntime.jsx(
          loader.Loader,
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

exports.Button = Button;
exports.ButtonPropsProvider = ButtonPropsProvider;
