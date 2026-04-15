"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Show } from '../show/show.js';

const ClientOnly = (props) => {
  const { children, fallback } = props;
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return /* @__PURE__ */ jsx(Show, { when: hasMounted, fallback, children });
};

export { ClientOnly };
