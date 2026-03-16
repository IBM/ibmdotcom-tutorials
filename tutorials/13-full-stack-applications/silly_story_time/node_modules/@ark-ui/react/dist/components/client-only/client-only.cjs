'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');

const noop = () => void 0;
const ClientOnly = (props) => {
  const { children, fallback } = props;
  const isClient = react.useSyncExternalStore(
    () => noop,
    () => true,
    () => false
  );
  if (!isClient) {
    return fallback;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
};

exports.ClientOnly = ClientOnly;
