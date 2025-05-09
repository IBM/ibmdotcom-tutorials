"use strict";
"use client";
'use strict';

var React = require('react');

function useCallbackRef(callback, deps = []) {
  const callbackRef = React.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  React.useInsertionEffect(() => {
    callbackRef.current = callback;
  });
  return React.useCallback((...args) => callbackRef.current?.(...args), deps);
}

exports.useCallbackRef = useCallbackRef;
