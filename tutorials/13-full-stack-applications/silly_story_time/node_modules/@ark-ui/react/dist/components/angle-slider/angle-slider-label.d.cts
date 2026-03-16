import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AngleSliderLabelBaseProps extends PolymorphicProps {
}
export interface AngleSliderLabelProps extends HTMLProps<'span'>, AngleSliderLabelBaseProps {
}
export declare const AngleSliderLabel: ForwardRefExoticComponent<AngleSliderLabelProps & RefAttributes<HTMLLabelElement>>;
