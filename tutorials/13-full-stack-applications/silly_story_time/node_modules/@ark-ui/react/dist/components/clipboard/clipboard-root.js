'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useClipboard } from './use-clipboard.js';
import { ClipboardProvider } from './use-clipboard-context.js';

const ClipboardRoot = forwardRef((props, ref) => {
  const [useClipboardProps, localProps] = createSplitProps()(props, [
    "defaultValue",
    "id",
    "ids",
    "onStatusChange",
    "onValueChange",
    "timeout",
    "value"
  ]);
  const clipboard = useClipboard(useClipboardProps);
  const mergedProps = mergeProps(clipboard.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(ClipboardProvider, { value: clipboard, children: /* @__PURE__ */ jsx(ark.div, { ref, ...mergedProps }) });
});
ClipboardRoot.displayName = "ClipboardRoot";

export { ClipboardRoot };
