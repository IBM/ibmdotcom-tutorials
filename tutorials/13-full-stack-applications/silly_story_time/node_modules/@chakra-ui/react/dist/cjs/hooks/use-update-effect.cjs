"use strict";
"use client";
'use strict';

var React = require('react');

const useUpdateEffect = (effect, deps) => {
  const renderCycleRef = React.useRef(false);
  const effectCycleRef = React.useRef(false);
  React.useEffect(() => {
    const isMounted = renderCycleRef.current;
    const shouldRun = isMounted && effectCycleRef.current;
    if (shouldRun) {
      return effect();
    }
    effectCycleRef.current = true;
  }, deps);
  React.useEffect(() => {
    renderCycleRef.current = true;
    return () => {
      renderCycleRef.current = false;
    };
  }, []);
};

exports.useUpdateEffect = useUpdateEffect;
