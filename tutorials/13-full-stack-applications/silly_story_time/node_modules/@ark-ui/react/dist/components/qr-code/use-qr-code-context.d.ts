import { UseQrCodeReturn } from './use-qr-code';
import { Provider } from 'react';
export interface UseQrCodeContext extends UseQrCodeReturn {
}
export declare const QrCodeProvider: Provider<UseQrCodeContext>, useQrCodeContext: () => UseQrCodeContext;
