'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useQrCode } from './use-qr-code.js';
import { QrCodeProvider } from './use-qr-code-context.js';

const QrCodeRoot = forwardRef((props, ref) => {
  const [qrcodeProps, localProps] = createSplitProps()(props, [
    "defaultValue",
    "encoding",
    "id",
    "ids",
    "onValueChange",
    "pixelSize",
    "value"
  ]);
  const qrCode = useQrCode(qrcodeProps);
  const mergedProps = mergeProps(qrCode.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(QrCodeProvider, { value: qrCode, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
QrCodeRoot.displayName = "QrcodeRoot";

export { QrCodeRoot };
