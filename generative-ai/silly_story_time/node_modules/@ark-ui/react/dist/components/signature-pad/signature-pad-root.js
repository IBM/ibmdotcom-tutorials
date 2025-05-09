'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useSignaturePad } from './use-signature-pad.js';
import { SignaturePadProvider } from './use-signature-pad-context.js';

const SignaturePadRoot = forwardRef((props, ref) => {
  const [useSignaturePadProps, localProps] = createSplitProps()(props, [
    "id",
    "ids",
    "drawing",
    "disabled",
    "readOnly",
    "name",
    "onDraw",
    "onDrawEnd",
    "readOnly",
    "required",
    "translations"
  ]);
  const signaturePad = useSignaturePad(useSignaturePadProps);
  const mergedProps = mergeProps(signaturePad.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(SignaturePadProvider, { value: signaturePad, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
SignaturePadRoot.displayName = "SignaturePadRoot";

export { SignaturePadRoot };
