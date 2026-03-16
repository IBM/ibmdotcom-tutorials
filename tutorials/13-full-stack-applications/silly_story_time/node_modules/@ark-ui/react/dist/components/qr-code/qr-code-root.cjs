'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useQrCode = require('./use-qr-code.cjs');
const useQrCodeContext = require('./use-qr-code-context.cjs');

const QrCodeRoot = react.forwardRef((props, ref) => {
  const [qrcodeProps, localProps] = createSplitProps.createSplitProps()(props, [
    "defaultValue",
    "encoding",
    "id",
    "ids",
    "onValueChange",
    "pixelSize",
    "value"
  ]);
  const qrCode = useQrCode.useQrCode(qrcodeProps);
  const mergedProps = react$1.mergeProps(qrCode.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useQrCodeContext.QrCodeProvider, { value: qrCode, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
QrCodeRoot.displayName = "QrcodeRoot";

exports.QrCodeRoot = QrCodeRoot;
