import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface QrCodeOverlayBaseProps extends PolymorphicProps {
}
export interface QrCodeOverlayProps extends HTMLProps<'div'>, QrCodeOverlayBaseProps {
}
export declare const QrCodeOverlay: ForwardRefExoticComponent<QrCodeOverlayProps & RefAttributes<HTMLDivElement>>;
