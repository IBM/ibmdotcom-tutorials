"use strict";
"use client";
import { useRef, useInsertionEffect, useCallback } from 'react';

function useCallbackRef(callback, deps = []) {
  const callbackRef = useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  useInsertionEffect(() => {
    callbackRef.current = callback;
  });
  return useCallback((...args) => callbackRef.current?.(...args), deps);
}

export { useCallbackRef };
