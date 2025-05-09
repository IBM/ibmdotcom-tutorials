"use strict";
import { jsx, Fragment } from 'react/jsx-runtime';
import { isValidElement } from 'react';

function Show(props) {
  const { when, fallback, children } = props;
  let result;
  if (!when) {
    result = fallback;
  } else {
    result = typeof children === "function" ? children(when) : children;
  }
  return isValidElement(result) ? result : /* @__PURE__ */ jsx(Fragment, { children: result });
}

export { Show };
