"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var factory = require('../../styled-system/factory.cjs');
var skipNavLink = require('./skip-nav-link.cjs');

const SkipNavContent = React.forwardRef(
  function SkipNavContent2(props, ref) {
    const { id = skipNavLink.fallbackId, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
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

exports.SkipNavContent = SkipNavContent;
