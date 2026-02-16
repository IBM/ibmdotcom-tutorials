'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useClipboardContext } from './use-clipboard-context.js';

const ClipboardControl = forwardRef((props, ref) => {
  const clipboard = useClipboardContext();
  const mergedProps = mergeProps(clipboard.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ClipboardControl.displayName = "ClipboardControl";

export { ClipboardControl };
