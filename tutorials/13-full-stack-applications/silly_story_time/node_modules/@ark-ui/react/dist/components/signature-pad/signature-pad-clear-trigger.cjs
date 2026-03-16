'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSignaturePadContext = require('./use-signature-pad-context.cjs');

const SignaturePadClearTrigger = react.forwardRef((props, ref) => {
  const signaturePad = useSignaturePadContext.useSignaturePadContext();
  const mergedProps = react$1.mergeProps(signaturePad.getClearTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
SignaturePadClearTrigger.displayName = "SignaturePadClearTrigger";

exports.SignaturePadClearTrigger = SignaturePadClearTrigger;
