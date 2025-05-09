"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var qrCode = require('@ark-ui/react/qr-code');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useQrCodeStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "qrCode" });
const QrCodeRoot = withProvider(
  qrCode.QrCode.Root,
  "root",
  { forwardAsChild: true }
);
const QrCodeRootProvider = withProvider(qrCode.QrCode.RootProvider, "root", { forwardAsChild: true });
const QrCodePropsProvider = PropsProvider;
const QrCodePattern = withContext(
  qrCode.QrCode.Pattern,
  "pattern",
  { forwardAsChild: true }
);
const QrCodeFrame = withContext(
  qrCode.QrCode.Frame,
  "frame",
  {
    forwardAsChild: true,
    defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(QrCodePattern, {}) }
  }
);
const QrCodeOverlay = withContext(
  qrCode.QrCode.Overlay,
  "overlay",
  { forwardAsChild: true }
);
const QrCodeDownloadTrigger = withContext(qrCode.QrCode.DownloadTrigger, "downloadTrigger", { forwardAsChild: true });

exports.QrCodeDownloadTrigger = QrCodeDownloadTrigger;
exports.QrCodeFrame = QrCodeFrame;
exports.QrCodeOverlay = QrCodeOverlay;
exports.QrCodePattern = QrCodePattern;
exports.QrCodePropsProvider = QrCodePropsProvider;
exports.QrCodeRoot = QrCodeRoot;
exports.QrCodeRootProvider = QrCodeRootProvider;
exports.useQrCodeStyles = useQrCodeStyles;
