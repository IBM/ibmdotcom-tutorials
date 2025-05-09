'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useClipboardContext } from './use-clipboard-context.js';

const ClipboardValueText = forwardRef((props, ref) => {
  const clipboard = useClipboardContext();
  return /* @__PURE__ */ jsx(ark.span, { ...props, ref, children: props.children || clipboard.value });
});
ClipboardValueText.displayName = "ClipboardValueText";

export { ClipboardValueText };
