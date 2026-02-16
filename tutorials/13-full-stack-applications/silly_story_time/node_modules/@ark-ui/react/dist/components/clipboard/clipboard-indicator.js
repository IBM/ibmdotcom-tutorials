'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useClipboardContext } from './use-clipboard-context.js';

const ClipboardIndicator = forwardRef((props, ref) => {
  const { children, copied, ...localProps } = props;
  const clipboard = useClipboardContext();
  const mergedProps = mergeProps(clipboard.getIndicatorProps({ copied: clipboard.copied }), localProps);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref, children: clipboard.copied ? copied : children });
});
ClipboardIndicator.displayName = "ClipboardIndicator";

export { ClipboardIndicator };
