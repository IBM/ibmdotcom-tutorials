import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseQrCodeProps } from './use-qr-code';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface QrCodeRootBaseProps extends UseQrCodeProps, PolymorphicProps {
}
export interface QrCodeRootProps extends Assign<HTMLProps<'div'>, QrCodeRootBaseProps> {
}
export declare const QrCodeRoot: ForwardRefExoticComponent<QrCodeRootProps & RefAttributes<HTMLDivElement>>;
