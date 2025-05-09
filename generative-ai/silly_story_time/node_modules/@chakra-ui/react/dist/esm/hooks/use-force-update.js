"use strict";
"use client";
import { useReducer } from 'react';

function useForceUpdate() {
  return useReducer((x) => x + 1, 0)[1];
}

export { useForceUpdate };
