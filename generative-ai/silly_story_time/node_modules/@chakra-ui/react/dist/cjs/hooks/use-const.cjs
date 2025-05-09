"use strict";
"use client";
'use strict';

var React = require('react');

function useConst(init) {
  const ref = React.useRef(null);
  if (ref.current === null) {
    ref.current = typeof init === "function" ? init() : init;
  }
  return ref.current;
}

exports.useConst = useConst;
