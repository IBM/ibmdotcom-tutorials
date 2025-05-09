import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface QrCodeFrameBaseProps extends PolymorphicProps {
}
export interface QrCodeFrameProps extends HTMLProps<'svg'>, QrCodeFrameBaseProps {
}
export declare const QrCodeFrame: ForwardRefExoticComponent<QrCodeFrameProps & RefAttributes<SVGSVGElement>>;
