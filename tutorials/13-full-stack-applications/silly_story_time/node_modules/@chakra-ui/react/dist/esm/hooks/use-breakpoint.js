"use strict";
"use client";
import { useChakraContext } from '../styled-system/provider.js';
import { useMediaQuery } from './use-media-query.js';

function useBreakpoint(options = {}) {
  options.fallback || (options.fallback = "base");
  const sys = useChakraContext();
  let fallbackPassed = false;
  const allBreakpoints = sys.breakpoints.values;
  const breakpoints = allBreakpoints.map(({ min, name: breakpoint }) => {
    const item = {
      breakpoint,
      query: `(min-width: ${min})`,
      fallback: !fallbackPassed
    };
    if (breakpoint === options.fallback) {
      fallbackPassed = true;
    }
    return item;
  }).filter(({ breakpoint }) => !!options.breakpoints?.includes(breakpoint));
  const fallback = breakpoints.map(({ fallback: fallback2 }) => fallback2);
  const values = useMediaQuery(
    breakpoints.map((bp) => bp.query),
    { fallback, ssr: options.ssr }
  );
  const index = values.lastIndexOf(true);
  return breakpoints[index]?.breakpoint ?? options.fallback;
}
function useBreakpointValue(value, opts) {
  const sys = useChakraContext();
  const normalized = sys.normalizeValue(value);
  const breakpoint = useBreakpoint({
    breakpoints: Object.keys(normalized),
    ...opts
  });
  return normalized[breakpoint];
}

export { useBreakpoint, useBreakpointValue };
