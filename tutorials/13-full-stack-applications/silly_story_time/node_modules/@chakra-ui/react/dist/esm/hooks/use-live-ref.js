"use strict";
"use client";
import { useRef } from 'react';

function useLiveRef(value) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

export { useLiveRef };
