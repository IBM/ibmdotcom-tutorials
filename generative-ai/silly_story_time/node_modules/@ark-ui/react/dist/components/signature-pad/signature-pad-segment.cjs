'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSignaturePadContext = require('./use-signature-pad-context.cjs');

const SignaturePadSegment = react.forwardRef((props, ref) => {
  const signaturePad = useSignaturePadContext.useSignaturePadContext();
  const mergedProps = react$1.mergeProps(signaturePad.getSegmentProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsxs(factory.ark.svg, { ...mergedProps, ref, children: [
    /* @__PURE__ */ jsxRuntime.jsx("title", { children: "Signature" }),
    signaturePad.paths.map((path, i) => /* @__PURE__ */ jsxRuntime.jsx("path", { ...signaturePad.getSegmentPathProps({ path }) }, i)),
    signaturePad.currentPath && /* @__PURE__ */ jsxRuntime.jsx("path", { ...signaturePad.getSegmentPathProps({ path: signaturePad.currentPath }) })
  ] });
});
SignaturePadSegment.displayName = "SignaturePadSegment";

exports.SignaturePadSegment = SignaturePadSegment;
