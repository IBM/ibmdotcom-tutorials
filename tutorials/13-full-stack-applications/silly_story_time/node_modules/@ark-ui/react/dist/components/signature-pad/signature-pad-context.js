'use client';
import { useSignaturePadContext } from './use-signature-pad-context.js';

const SignaturePadContext = (props) => props.children(useSignaturePadContext());

export { SignaturePadContext };
