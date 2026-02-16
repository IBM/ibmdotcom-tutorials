'use client';
import { jsx, Fragment } from 'react/jsx-runtime';
import { useSyncExternalStore } from 'react';

const noop = () => void 0;
const ClientOnly = (props) => {
  const { children, fallback } = props;
  const isClient = useSyncExternalStore(
    () => noop,
    () => true,
    () => false
  );
  if (!isClient) {
    return fallback;
  }
  return /* @__PURE__ */ jsx(Fragment, { children });
};

export { ClientOnly };
