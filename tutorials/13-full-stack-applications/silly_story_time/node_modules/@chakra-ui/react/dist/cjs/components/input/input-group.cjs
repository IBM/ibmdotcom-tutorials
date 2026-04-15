"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var inputAddon = require('./input-addon.cjs');
var inputElement = require('./input-element.cjs');
var group = require('../group/group.cjs');

const InputGroup = React.forwardRef(
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
    const child = React.Children.only(children);
    const attached = Boolean(startAddon || endAddon);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      group.Group,
      {
        width: "full",
        ref,
        attached,
        skip: (el) => el.type === inputElement.InputElement,
        ...rest,
        children: [
          startAddon && /* @__PURE__ */ jsxRuntime.jsx(inputAddon.InputAddon, { ...startAddonProps, children: startAddon }),
          startElement && /* @__PURE__ */ jsxRuntime.jsx(inputElement.InputElement, { pointerEvents: "none", ...startElementProps, children: startElement }),
          React.cloneElement(child, {
            ...startElement && {
              ps: `calc(var(--input-height) - ${startOffset})`
            },
            ...endElement && { pe: `calc(var(--input-height) - ${endOffset})` },
            ...children.props
          }),
          endElement && /* @__PURE__ */ jsxRuntime.jsx(inputElement.InputElement, { placement: "end", ...endElementProps, children: endElement }),
          endAddon && /* @__PURE__ */ jsxRuntime.jsx(inputAddon.InputAddon, { ...endAddonProps, children: endAddon })
        ]
      }
    );
  }
);

exports.InputGroup = InputGroup;
