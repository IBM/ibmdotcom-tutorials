'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useQrCodeContext = require('./use-qr-code-context.cjs');

const QrCodeDownloadTrigger = react.forwardRef((props, ref) => {
  const [downloadTriggerProps, localProps] = createSplitProps.createSplitProps()(props, [
    "fileName",
    "mimeType",
    "quality"
  ]);
  const qrCode = useQrCodeContext.useQrCodeContext();
  const mergedProps = react$1.mergeProps(qrCode.getDownloadTriggerProps(downloadTriggerProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
QrCodeDownloadTrigger.displayName = "QrCodeDownloadTrigger";

exports.QrCodeDownloadTrigger = QrCodeDownloadTrigger;
