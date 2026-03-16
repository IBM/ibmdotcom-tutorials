"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { cx } from '../../utils/cx.js';
import { chakra } from '../../styled-system/factory.js';

const LinkOverlay = forwardRef(
  function LinkOverlay2(props, ref) {
    const { rel, className, ...rest } = props;
    return /* @__PURE__ */ jsx(
      chakra.a,
      {
        ...rest,
        ref,
        className: cx("chakra-linkbox__overlay", className),
        css: [
          {
            position: "static",
            "&::before": {
              content: "''",
              cursor: "inherit",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
              width: "100%",
              height: "100%"
            }
          },
          props.css
        ]
      }
    );
  }
);
const LinkBox = forwardRef(
  function LinkBox2(props, ref) {
    const { className, ...rest } = props;
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        position: "relative",
        ...rest,
        className: cx("chakra-linkbox", className),
        css: [
          {
            /* Elevate the links and abbreviations up */
            "& a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
              position: "relative",
              zIndex: 1
            }
          },
          props.css
        ]
      }
    );
  }
);

export { LinkBox, LinkOverlay };
