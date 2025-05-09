"use strict";
"use client";
import { useMemo } from 'react';
import { useChakraContext } from './provider.js';

function useToken(category, token) {
  const sys = useChakraContext();
  return useMemo(() => {
    const arr = Array.isArray(token) ? token : [token];
    return arr.map((t) => sys.token(`${category}.${t}`, t));
  }, [sys, category, token]);
}

export { useToken };
