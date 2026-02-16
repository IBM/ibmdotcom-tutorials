'use client';
import { useRef, useEffect } from 'react';

const FrameContent = (props) => {
  const { onMount, onUnmount, children } = props;
  const mountedRef = useRef(false);
  const calledRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current && !calledRef.current) {
      onMount?.();
      mountedRef.current = true;
      calledRef.current = true;
    }
    return () => {
      if (mountedRef.current) {
        onUnmount?.();
        mountedRef.current = false;
      }
    };
  }, []);
  return children;
};

export { FrameContent };
