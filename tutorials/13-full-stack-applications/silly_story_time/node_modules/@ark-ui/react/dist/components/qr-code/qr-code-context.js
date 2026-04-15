'use client';
import { useQrCodeContext } from './use-qr-code-context.js';

const QrCodeContext = (props) => props.children(useQrCodeContext());

export { QrCodeContext };
