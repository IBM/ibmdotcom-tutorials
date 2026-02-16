"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var factory = require('../../styled-system/factory.cjs');

const Flex = React.forwardRef(
  function Flex2(props, ref) {
    const {
      direction,
      align,
      justify,
      wrap,
      basis,
      grow,
      shrink,
      inline,
      ...rest
    } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        ...rest,
        css: {
          display: inline ? "inline-flex" : "flex",
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap,
          flexBasis: basis,
          flexGrow: grow,
          flexShrink: shrink,
          ...props.css
        }
      }
    );
  }
);

exports.Flex = Flex;
