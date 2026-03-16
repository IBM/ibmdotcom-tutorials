"use strict";
"use client";
import { useLayoutEffect, useEffect } from 'react';

const useSafeLayoutEffect = typeof globalThis?.document !== "undefined" ? useLayoutEffect : useEffect;

export { useSafeLayoutEffect };
