'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useQrCodeContext } from './use-qr-code-context.js';

const QrCodePattern = forwardRef((props, ref) => {
  const qrCode = useQrCodeContext();
  const mergedProps = mergeProps(qrCode.getPatternProps(), props);
  return /* @__PURE__ */ jsx(ark.path, { ...mergedProps, ref });
});
QrCodePattern.displayName = "QrCodePattern";

export { QrCodePattern };
