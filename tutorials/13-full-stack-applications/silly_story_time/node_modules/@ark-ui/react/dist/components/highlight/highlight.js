import { jsx } from 'react/jsx-runtime';
import { Fragment } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { useHighlight } from './use-highlight.js';

const Highlight = (props) => {
  if (typeof props.text !== "string") {
    throw new Error("[ark-ui/highlight] text must be a string");
  }
  const [highlightProps, localProps] = createSplitProps()(props, [
    "query",
    "text",
    "ignoreCase",
    "matchAll"
  ]);
  const chunks = useHighlight(highlightProps);
  return /* @__PURE__ */ jsx(Fragment, { children: chunks.map(
    ({ text, match }, i) => match ? /* @__PURE__ */ jsx("mark", { ...localProps, children: text }, i) : /* @__PURE__ */ jsx(Fragment, { children: text }, i)
  ) });
};

export { Highlight };
