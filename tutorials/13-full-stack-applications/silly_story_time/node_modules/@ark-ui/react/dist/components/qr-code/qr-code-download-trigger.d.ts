import { DownloadTriggerProps } from '@zag-js/qr-code';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface QrCodeDownloadTriggerBaseProps extends DownloadTriggerProps, PolymorphicProps {
}
export interface QrCodeDownloadTriggerProps extends HTMLProps<'button'>, QrCodeDownloadTriggerBaseProps {
}
export declare const QrCodeDownloadTrigger: ForwardRefExoticComponent<QrCodeDownloadTriggerProps & RefAttributes<HTMLButtonElement>>;
