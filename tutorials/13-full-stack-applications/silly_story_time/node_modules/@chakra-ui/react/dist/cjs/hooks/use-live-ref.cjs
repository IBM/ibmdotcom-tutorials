"use strict";
"use client";
'use strict';

var React = require('react');

function useLiveRef(value) {
  const ref = React.useRef(value);
  ref.current = value;
  return ref;
}

exports.useLiveRef = useLiveRef;
