"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { useHighlight } from '@ark-ui/react/highlight';
import { Fragment } from 'react';
import { Mark } from '../typography/mark.js';
import { For } from '../for/for.js';

function Highlight(props) {
  const { children, query, ignoreCase, matchAll, styles } = props;
  if (typeof children !== "string") {
    throw new Error("The children prop of Highlight must be a string");
  }
  const chunks = useHighlight({
    query,
    text: children,
    matchAll,
    ignoreCase
  });
  return /* @__PURE__ */ jsx(For, { each: chunks, children: (chunk, index) => {
    return chunk.match ? /* @__PURE__ */ jsx(Mark, { css: styles, children: chunk.text }, index) : /* @__PURE__ */ jsx(Fragment, { children: chunk.text }, index);
  } });
}

export { Highlight };
