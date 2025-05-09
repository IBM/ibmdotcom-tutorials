'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const react = require('react');

const FrameContent = (props) => {
  const { onMount, onUnmount, children } = props;
  const mountedRef = react.useRef(false);
  const calledRef = react.useRef(false);
  react.useEffect(() => {
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

exports.FrameContent = FrameContent;
