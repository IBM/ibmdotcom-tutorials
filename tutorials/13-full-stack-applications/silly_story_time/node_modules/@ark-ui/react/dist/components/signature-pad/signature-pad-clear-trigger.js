'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSignaturePadContext } from './use-signature-pad-context.js';

const SignaturePadClearTrigger = forwardRef((props, ref) => {
  const signaturePad = useSignaturePadContext();
  const mergedProps = mergeProps(signaturePad.getClearTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
SignaturePadClearTrigger.displayName = "SignaturePadClearTrigger";

export { SignaturePadClearTrigger };
