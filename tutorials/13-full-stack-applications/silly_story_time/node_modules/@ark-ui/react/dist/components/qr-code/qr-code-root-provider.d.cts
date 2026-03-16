import { HTMLProps, PolymorphicProps } from '../factory';
import { UseQrCodeReturn } from './use-qr-code';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseQrCodeReturn;
}
export interface QrCodeRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface QrCodeRootProviderProps extends HTMLProps<'div'>, QrCodeRootProviderBaseProps {
}
export declare const QrCodeRootProvider: ForwardRefExoticComponent<QrCodeRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
