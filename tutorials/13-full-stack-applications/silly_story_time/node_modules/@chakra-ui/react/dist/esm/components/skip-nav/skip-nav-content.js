"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { chakra } from '../../styled-system/factory.js';
import { fallbackId } from './skip-nav-link.js';

const SkipNavContent = forwardRef(
  function SkipNavContent2(props, ref) {
    const { id = fallbackId, ...rest } = props;
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        id,
        tabIndex: -1,
        style: { outline: 0 },
        ...rest
      }
    );
  }
);

export { SkipNavContent };
