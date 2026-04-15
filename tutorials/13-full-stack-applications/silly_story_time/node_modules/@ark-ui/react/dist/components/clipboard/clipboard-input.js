'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useClipboardContext } from './use-clipboard-context.js';

const ClipboardInput = forwardRef((props, ref) => {
  const clipboard = useClipboardContext();
  const mergedProps = mergeProps(clipboard.getInputProps(), props);
  return /* @__PURE__ */ jsx(ark.input, { ...mergedProps, ref });
});
ClipboardInput.displayName = "ClipboardInput";

export { ClipboardInput };
