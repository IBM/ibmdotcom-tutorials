'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const react = require('react');

const useEffectOnce = (cb) => {
  const savedCallback = react.useRef(cb);
  const effectGuard = react.useRef(false);
  react.useEffect(() => {
    savedCallback.current = cb;
  });
  react.useEffect(() => {
    if (effectGuard.current !== true) {
      effectGuard.current = true;
      savedCallback.current();
    }
  }, []);
};

exports.useEffectOnce = useEffectOnce;
