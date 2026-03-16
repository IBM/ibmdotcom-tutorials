"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('../../utils/cx.cjs');
var factory = require('../../styled-system/factory.cjs');

const LinkOverlay = React.forwardRef(
  function LinkOverlay2(props, ref) {
    const { rel, className, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.a,
      {
        ...rest,
        ref,
        className: cx.cx("chakra-linkbox__overlay", className),
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
const LinkBox = React.forwardRef(
  function LinkBox2(props, ref) {
    const { className, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        position: "relative",
        ...rest,
        className: cx.cx("chakra-linkbox", className),
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

exports.LinkBox = LinkBox;
exports.LinkOverlay = LinkOverlay;
