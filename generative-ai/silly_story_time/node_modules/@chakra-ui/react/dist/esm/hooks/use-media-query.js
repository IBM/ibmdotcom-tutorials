"use strict";
"use client";
import { useState, useEffect } from 'react';
import { useCallbackRef } from './use-callback-ref.js';

function listen(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function useMediaQuery(query, options = {}) {
  const { fallback: _fallback = [], ssr = true, getWindow } = options;
  const getWin = useCallbackRef(getWindow);
  const queries = Array.isArray(query) ? query : [query];
  const fallback = _fallback?.filter((v) => v != null);
  const [value, setValue] = useState(() => {
    return queries.map((query2, index) => {
      if (!ssr) {
        const { media, matches } = (getWindow?.() ?? window).matchMedia(query2);
        return { media, matches };
      }
      return { media: query2, matches: !!fallback[index] };
    });
  });
  useEffect(() => {
    const win = getWin() ?? window;
    setValue((prev) => {
      const current = queries.map((query2) => {
        const { media, matches } = win.matchMedia(query2);
        return { media, matches };
      });
      return prev.every(
        (v, i) => v.matches === current[i].matches && v.media === current[i].media
      ) ? prev : current;
    });
    const mql = queries.map((query2) => win.matchMedia(query2));
    const handler = (evt) => {
      setValue((prev) => {
        return prev.slice().map((item) => {
          if (item.media === evt.media) return { ...item, matches: evt.matches };
          return item;
        });
      });
    };
    const cleanups = mql.map((v) => listen(v, handler));
    return () => cleanups.forEach((fn) => fn());
  }, [getWin]);
  return value.map((item) => item.matches);
}

export { useMediaQuery };
