'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useQrCodeContext = require('./use-qr-code-context.cjs');

const QrCodeOverlay = react.forwardRef((props, ref) => {
  const qrCode = useQrCodeContext.useQrCodeContext();
  const mergedProps = react$1.mergeProps(qrCode.getOverlayProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
QrCodeOverlay.displayName = "QrCodeOverlay";

exports.QrCodeOverlay = QrCodeOverlay;
