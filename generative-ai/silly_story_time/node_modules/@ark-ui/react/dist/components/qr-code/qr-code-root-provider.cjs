'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useQrCodeContext = require('./use-qr-code-context.cjs');

const QrCodeRootProvider = react.forwardRef((props, ref) => {
  const [{ value: qrCode }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(qrCode.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useQrCodeContext.QrCodeProvider, { value: qrCode, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
QrCodeRootProvider.displayName = "QrCodeRootProvider";

exports.QrCodeRootProvider = QrCodeRootProvider;
