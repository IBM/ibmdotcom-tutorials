'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { QrCodeProvider } from './use-qr-code-context.js';

const QrCodeRootProvider = forwardRef((props, ref) => {
  const [{ value: qrCode }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(qrCode.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(QrCodeProvider, { value: qrCode, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
QrCodeRootProvider.displayName = "QrCodeRootProvider";

export { QrCodeRootProvider };
