'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useClipboardContext } from './use-clipboard-context.js';

const ClipboardTrigger = forwardRef((props, ref) => {
  const clipboard = useClipboardContext();
  const mergedProps = mergeProps(clipboard.getTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
ClipboardTrigger.displayName = "ClipboardTrigger";

export { ClipboardTrigger };
