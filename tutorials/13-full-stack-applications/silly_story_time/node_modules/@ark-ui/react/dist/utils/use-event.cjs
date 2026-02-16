'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const react = require('react');

function useEvent(callback, opts = {}) {
  const { sync = false } = opts;
  const callbackRef = useLatestRef(callback);
  return react.useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (...args) => {
      if (sync) return queueMicrotask(() => callbackRef.current?.(...args));
      return callbackRef.current?.(...args);
    },
    [sync, callbackRef]
  );
}
function useLatestRef(value) {
  const ref = react.useRef(value);
  ref.current = value;
  return ref;
}

exports.useEvent = useEvent;
