'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSignaturePadContext } from './use-signature-pad-context.js';

const SignaturePadLabel = forwardRef((props, ref) => {
  const signaturePad = useSignaturePadContext();
  const mergedProps = mergeProps(signaturePad.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
SignaturePadLabel.displayName = "SignaturePadLabel";

export { SignaturePadLabel };
