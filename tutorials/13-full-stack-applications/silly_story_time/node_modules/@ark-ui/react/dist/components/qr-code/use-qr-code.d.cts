import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as qrcode from '@zag-js/qr-code';
export interface UseQrCodeProps extends Optional<Omit<qrcode.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseQrCodeReturn extends qrcode.Api<PropTypes> {
}
export declare const useQrCode: (props?: UseQrCodeProps) => UseQrCodeReturn;
