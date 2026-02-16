'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const react = require('react');

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = react.useState(value);
  react.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}

exports.useDebounce = useDebounce;
