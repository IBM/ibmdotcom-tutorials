'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useQrCodeContext } from './use-qr-code-context.js';

const QrCodeOverlay = forwardRef((props, ref) => {
  const qrCode = useQrCodeContext();
  const mergedProps = mergeProps(qrCode.getOverlayProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
QrCodeOverlay.displayName = "QrCodeOverlay";

export { QrCodeOverlay };
