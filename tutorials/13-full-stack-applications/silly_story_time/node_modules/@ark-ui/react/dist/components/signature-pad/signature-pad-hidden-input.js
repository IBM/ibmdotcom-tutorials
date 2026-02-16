'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useSignaturePadContext } from './use-signature-pad-context.js';

const SignaturePadHiddenInput = forwardRef((props, ref) => {
  const [hiddenInputProps, localProps] = createSplitProps()(props, ["value"]);
  const signaturePad = useSignaturePadContext();
  const mergedProps = mergeProps(signaturePad.getHiddenInputProps(hiddenInputProps), localProps);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
SignaturePadHiddenInput.displayName = "SignaturePadHiddenInput";

export { SignaturePadHiddenInput };
