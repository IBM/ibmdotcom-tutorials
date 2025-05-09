"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var show = require('../show/show.cjs');

const ClientOnly = (props) => {
  const { children, fallback } = props;
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(show.Show, { when: hasMounted, fallback, children });
};

exports.ClientOnly = ClientOnly;
