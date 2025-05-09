'use client';
import { useRef, useEffect } from 'react';

const useEffectOnce = (cb) => {
  const savedCallback = useRef(cb);
  const effectGuard = useRef(false);
  useEffect(() => {
    savedCallback.current = cb;
  });
  useEffect(() => {
    if (effectGuard.current !== true) {
      effectGuard.current = true;
      savedCallback.current();
    }
  }, []);
};

export { useEffectOnce };
