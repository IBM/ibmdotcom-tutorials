'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useClipboardContext } from './use-clipboard-context.js';

const ClipboardLabel = forwardRef((props, ref) => {
  const clipboard = useClipboardContext();
  const mergedProps = mergeProps(clipboard.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
ClipboardLabel.displayName = "ClipboardLabel";

export { ClipboardLabel };
