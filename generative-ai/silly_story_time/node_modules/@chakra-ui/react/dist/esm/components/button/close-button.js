"use strict";
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { CloseIcon } from '../icons.js';
import { IconButton } from './icon-button.js';

const CloseButton = React.forwardRef(function CloseButton2(props, ref) {
  return /* @__PURE__ */ jsx(IconButton, { variant: "ghost", "aria-label": "Close", ref, ...props, children: props.children ?? /* @__PURE__ */ jsx(CloseIcon, {}) });
});

export { CloseButton };
