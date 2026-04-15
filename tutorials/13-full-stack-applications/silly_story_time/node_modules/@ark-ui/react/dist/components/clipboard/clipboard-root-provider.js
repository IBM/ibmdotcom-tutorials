'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { ClipboardProvider } from './use-clipboard-context.js';

const ClipboardRootProvider = forwardRef((props, ref) => {
  const [{ value: clipboard }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(clipboard.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(ClipboardProvider, { value: clipboard, children: /* @__PURE__ */ jsx(ark.div, { ref, ...mergedProps }) });
});
ClipboardRootProvider.displayName = "ClipboardRootProvider";

export { ClipboardRootProvider };
