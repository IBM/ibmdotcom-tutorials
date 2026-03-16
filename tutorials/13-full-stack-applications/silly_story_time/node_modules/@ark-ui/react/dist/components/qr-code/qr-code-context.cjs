'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useQrCodeContext = require('./use-qr-code-context.cjs');

const QrCodeContext = (props) => props.children(useQrCodeContext.useQrCodeContext());

exports.QrCodeContext = QrCodeContext;
