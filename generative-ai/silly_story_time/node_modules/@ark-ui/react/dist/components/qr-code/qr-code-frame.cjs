'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useQrCodeContext = require('./use-qr-code-context.cjs');

const QrCodeFrame = react.forwardRef((props, ref) => {
  const qrCode = useQrCodeContext.useQrCodeContext();
  const mergedProps = react$1.mergeProps(qrCode.getFrameProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.svg, { ...mergedProps, ref });
});
QrCodeFrame.displayName = "QrCodeFrame";

exports.QrCodeFrame = QrCodeFrame;
