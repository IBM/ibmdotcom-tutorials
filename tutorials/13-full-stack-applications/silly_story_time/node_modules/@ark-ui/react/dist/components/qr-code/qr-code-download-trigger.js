'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useQrCodeContext } from './use-qr-code-context.js';

const QrCodeDownloadTrigger = forwardRef((props, ref) => {
  const [downloadTriggerProps, localProps] = createSplitProps()(props, [
    "fileName",
    "mimeType",
    "quality"
  ]);
  const qrCode = useQrCodeContext();
  const mergedProps = mergeProps(qrCode.getDownloadTriggerProps(downloadTriggerProps), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
QrCodeDownloadTrigger.displayName = "QrCodeDownloadTrigger";

export { QrCodeDownloadTrigger };
