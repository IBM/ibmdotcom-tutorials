"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('../../utils/cx.cjs');
var is = require('../../utils/is.cjs');
var omit = require('../../utils/omit.cjs');
var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');

const { useRecipeResult, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "separator"
});
const Separator = React.forwardRef(
  function Separator2(props, ref) {
    const { styles, className, props: otherProps } = useRecipeResult(props);
    const orientation = props.orientation || "horizontal";
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.span,
      {
        ref,
        role: is.isString(orientation) ? "separator" : "presentation",
        "aria-orientation": is.isString(orientation) ? orientation : void 0,
        ...omit.omit(otherProps, ["orientation"]),
        className: cx.cx(className, props.className),
        css: [styles, props.css]
      }
    );
  }
);
const SeparatorPropsProvider = PropsProvider;

exports.Separator = Separator;
exports.SeparatorPropsProvider = SeparatorPropsProvider;
