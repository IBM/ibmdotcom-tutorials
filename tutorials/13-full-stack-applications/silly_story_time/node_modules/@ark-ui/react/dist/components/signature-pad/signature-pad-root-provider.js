'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { SignaturePadProvider } from './use-signature-pad-context.js';

const SignaturePadRootProvider = forwardRef((props, ref) => {
  const [{ value: signaturePad }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(signaturePad.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(SignaturePadProvider, { value: signaturePad, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
SignaturePadRootProvider.displayName = "SignaturePadRootProvider";

export { SignaturePadRootProvider };
