'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSignaturePadContext } from './use-signature-pad-context.js';

const SignaturePadSegment = forwardRef((props, ref) => {
  const signaturePad = useSignaturePadContext();
  const mergedProps = mergeProps(signaturePad.getSegmentProps(), props);
  return /* @__PURE__ */ jsxs(ark.svg, { ...mergedProps, ref, children: [
    /* @__PURE__ */ jsx("title", { children: "Signature" }),
    signaturePad.paths.map((path, i) => /* @__PURE__ */ jsx("path", { ...signaturePad.getSegmentPathProps({ path }) }, i)),
    signaturePad.currentPath && /* @__PURE__ */ jsx("path", { ...signaturePad.getSegmentPathProps({ path: signaturePad.currentPath }) })
  ] });
});
SignaturePadSegment.displayName = "SignaturePadSegment";

export { SignaturePadSegment };
