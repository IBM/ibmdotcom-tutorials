"use strict";
"use client";
import { useEnvironmentContext } from '@ark-ui/react';
import { useRef, useState, useEffect } from 'react';

function useElementRect() {
  const ref = useRef(null);
  const [rect, setRect] = useState(null);
  const env = useEnvironmentContext();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleResize = () => {
      setRect(node.getBoundingClientRect());
    };
    const win = env.getWindow();
    if (!win) return;
    const observer = new win.ResizeObserver(handleResize);
    observer.observe(node);
    return () => observer.disconnect();
  }, [env]);
  return { ref, rect };
}

export { useElementRect };
