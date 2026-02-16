"use strict";
"use client";
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, Children, cloneElement } from 'react';
import { InputAddon } from './input-addon.js';
import { InputElement } from './input-element.js';
import { Group } from '../group/group.js';

const InputGroup = forwardRef(
  function InputGroup2(props, ref) {
    const {
      startElement,
      startElementProps,
      endElement,
      endElementProps,
      startAddon,
      startAddonProps,
      endAddon,
      endAddonProps,
      children,
      startOffset = "0px",
      endOffset = "0px",
      ...rest
    } = props;
    const child = Children.only(children);
    const attached = Boolean(startAddon || endAddon);
    return /* @__PURE__ */ jsxs(
      Group,
      {
        width: "full",
        ref,
        attached,
        skip: (el) => el.type === InputElement,
        ...rest,
        children: [
          startAddon && /* @__PURE__ */ jsx(InputAddon, { ...startAddonProps, children: startAddon }),
          startElement && /* @__PURE__ */ jsx(InputElement, { pointerEvents: "none", ...startElementProps, children: startElement }),
          cloneElement(child, {
            ...startElement && {
              ps: `calc(var(--input-height) - ${startOffset})`
            },
            ...endElement && { pe: `calc(var(--input-height) - ${endOffset})` },
            ...children.props
          }),
          endElement && /* @__PURE__ */ jsx(InputElement, { placement: "end", ...endElementProps, children: endElement }),
          endAddon && /* @__PURE__ */ jsx(InputAddon, { ...endAddonProps, children: endAddon })
        ]
      }
    );
  }
);

export { InputGroup };
