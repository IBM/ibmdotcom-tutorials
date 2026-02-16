"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { QrCode } from '@ark-ui/react/qr-code';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useQrCodeStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "qrCode" });
const QrCodeRoot = withProvider(
  QrCode.Root,
  "root",
  { forwardAsChild: true }
);
const QrCodeRootProvider = withProvider(QrCode.RootProvider, "root", { forwardAsChild: true });
const QrCodePropsProvider = PropsProvider;
const QrCodePattern = withContext(
  QrCode.Pattern,
  "pattern",
  { forwardAsChild: true }
);
const QrCodeFrame = withContext(
  QrCode.Frame,
  "frame",
  {
    forwardAsChild: true,
    defaultProps: { children: /* @__PURE__ */ jsx(QrCodePattern, {}) }
  }
);
const QrCodeOverlay = withContext(
  QrCode.Overlay,
  "overlay",
  { forwardAsChild: true }
);
const QrCodeDownloadTrigger = withContext(QrCode.DownloadTrigger, "downloadTrigger", { forwardAsChild: true });

export { QrCodeDownloadTrigger, QrCodeFrame, QrCodeOverlay, QrCodePattern, QrCodePropsProvider, QrCodeRoot, QrCodeRootProvider, useQrCodeStyles };
