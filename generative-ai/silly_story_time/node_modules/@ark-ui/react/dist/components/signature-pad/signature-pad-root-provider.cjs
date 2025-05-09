'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSignaturePadContext = require('./use-signature-pad-context.cjs');

const SignaturePadRootProvider = react.forwardRef((props, ref) => {
  const [{ value: signaturePad }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(signaturePad.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSignaturePadContext.SignaturePadProvider, { value: signaturePad, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
SignaturePadRootProvider.displayName = "SignaturePadRootProvider";

exports.SignaturePadRootProvider = SignaturePadRootProvider;
