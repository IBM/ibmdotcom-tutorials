"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('../../utils/cx.cjs');
var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const { useRecipeResult, PropsProvider } = createRecipeContext.createRecipeContext({ key: "icon" });
const Icon = React__namespace.forwardRef(
  function Icon2(props, ref) {
    const {
      styles,
      className,
      props: otherProps
    } = useRecipeResult({ asChild: !props.as, ...props });
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.svg,
      {
        ref,
        focusable: false,
        "aria-hidden": "true",
        ...otherProps,
        css: [styles, props.css],
        className: cx.cx(className, props.className)
      }
    );
  }
);
const IconPropsProvider = PropsProvider;

exports.Icon = Icon;
exports.IconPropsProvider = IconPropsProvider;
