'use client';
import { useCallback, useRef } from 'react';

function useEvent(callback, opts = {}) {
  const { sync = false } = opts;
  const callbackRef = useLatestRef(callback);
  return useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (...args) => {
      if (sync) return queueMicrotask(() => callbackRef.current?.(...args));
      return callbackRef.current?.(...args);
    },
    [sync, callbackRef]
  );
}
function useLatestRef(value) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

export { useEvent };
