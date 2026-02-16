import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AngleSliderThumbBaseProps extends PolymorphicProps {
}
export interface AngleSliderThumbProps extends HTMLProps<'div'>, AngleSliderThumbBaseProps {
}
export declare const AngleSliderThumb: ForwardRefExoticComponent<AngleSliderThumbProps & RefAttributes<HTMLDivElement>>;
