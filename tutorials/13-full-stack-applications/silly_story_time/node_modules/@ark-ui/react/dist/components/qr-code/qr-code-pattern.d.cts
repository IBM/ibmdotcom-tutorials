import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface QrCodePatternBaseProps extends PolymorphicProps {
}
export interface QrCodePatternProps extends HTMLProps<'path'>, QrCodePatternBaseProps {
}
export declare const QrCodePattern: ForwardRefExoticComponent<QrCodePatternProps & RefAttributes<SVGPathElement>>;
