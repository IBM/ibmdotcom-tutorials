"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('../../utils/cx.cjs');
var factory = require('../../styled-system/factory.cjs');
var getSeparatorStyle = require('./get-separator-style.cjs');

function getValidChildren(children) {
  return React.Children.toArray(children).filter(
    (child) => React.isValidElement(child)
  );
}
const Stack = React.forwardRef(
  function Stack2(props, ref) {
    const {
      direction = "column",
      align,
      justify,
      gap = "0.5rem",
      wrap,
      children,
      separator,
      className,
      ...rest
    } = props;
    const separatorStyle = React.useMemo(
      () => getSeparatorStyle.getSeparatorStyles({ gap, direction }),
      [gap, direction]
    );
    const clones = React.useMemo(() => {
      if (!separator) return children;
      return getValidChildren(children).map((child, index, arr) => {
        const key = typeof child.key !== "undefined" ? child.key : index;
        const sep = React.cloneElement(separator, {
          css: [separatorStyle, separator.props.css]
        });
        return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
          child,
          index === arr.length - 1 ? null : sep
        ] }, key);
      });
    }, [children, separator, separatorStyle]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        gap: separator ? void 0 : gap,
        className: cx.cx("chakra-stack", className),
        ...rest,
        children: clones
      }
    );
  }
);

exports.Stack = Stack;
