"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { chakra } from '../../styled-system/factory.js';

const Flex = forwardRef(
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
    return /* @__PURE__ */ jsx(
      chakra.div,
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

export { Flex };
