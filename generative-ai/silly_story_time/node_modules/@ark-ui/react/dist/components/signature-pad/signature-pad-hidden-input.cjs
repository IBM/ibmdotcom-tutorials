'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useFieldContext = require('../field/use-field-context.cjs');
const useSignaturePadContext = require('./use-signature-pad-context.cjs');

const SignaturePadHiddenInput = react.forwardRef((props, ref) => {
  const [hiddenInputProps, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const signaturePad = useSignaturePadContext.useSignaturePadContext();
  const mergedProps = react$1.mergeProps(signaturePad.getHiddenInputProps(hiddenInputProps), localProps);
  const field = useFieldContext.useFieldContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
SignaturePadHiddenInput.displayName = "SignaturePadHiddenInput";

exports.SignaturePadHiddenInput = SignaturePadHiddenInput;
