"use strict";
"use client";
'use strict';

var react = require('@ark-ui/react');
var React = require('react');

function useElementRect() {
  const ref = React.useRef(null);
  const [rect, setRect] = React.useState(null);
  const env = react.useEnvironmentContext();
  React.useEffect(() => {
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

exports.useElementRect = useElementRect;
