import { ReactNode } from 'react';
import { UseQrCodeContext } from './use-qr-code-context';
export interface QrCodeContextProps {
    children: (context: UseQrCodeContext) => ReactNode;
}
export declare const QrCodeContext: (props: QrCodeContextProps) => ReactNode;
