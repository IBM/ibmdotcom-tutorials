'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useSignaturePadContext = require('./use-signature-pad-context.cjs');

const SignaturePadContext = (props) => props.children(useSignaturePadContext.useSignaturePadContext());

exports.SignaturePadContext = SignaturePadContext;
