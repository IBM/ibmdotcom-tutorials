"use strict";
"use client";
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo, cloneElement, Fragment, Children, isValidElement } from 'react';
import { cx } from '../../utils/cx.js';
import { chakra } from '../../styled-system/factory.js';
import { getSeparatorStyles } from './get-separator-style.js';

function getValidChildren(children) {
  return Children.toArray(children).filter(
    (child) => isValidElement(child)
  );
}
const Stack = forwardRef(
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
    const separatorStyle = useMemo(
      () => getSeparatorStyles({ gap, direction }),
      [gap, direction]
    );
    const clones = useMemo(() => {
      if (!separator) return children;
      return getValidChildren(children).map((child, index, arr) => {
        const key = typeof child.key !== "undefined" ? child.key : index;
        const sep = cloneElement(separator, {
          css: [separatorStyle, separator.props.css]
        });
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          child,
          index === arr.length - 1 ? null : sep
        ] }, key);
      });
    }, [children, separator, separatorStyle]);
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        gap: separator ? void 0 : gap,
        className: cx("chakra-stack", className),
        ...rest,
        children: clones
      }
    );
  }
);

export { Stack };
