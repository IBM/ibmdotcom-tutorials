'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSignaturePadContext } from './use-signature-pad-context.js';

const SignaturePadGuide = forwardRef((props, ref) => {
  const signaturePad = useSignaturePadContext();
  const mergedProps = mergeProps(signaturePad.getGuideProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SignaturePadGuide.displayName = "SignaturePadGuide";

export { SignaturePadGuide };
