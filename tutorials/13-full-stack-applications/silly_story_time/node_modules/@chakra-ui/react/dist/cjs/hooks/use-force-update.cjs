"use strict";
"use client";
'use strict';

var React = require('react');

function useForceUpdate() {
  return React.useReducer((x) => x + 1, 0)[1];
}

exports.useForceUpdate = useForceUpdate;
