import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AngleSliderValueTextBaseProps extends PolymorphicProps {
}
export interface AngleSliderValueTextProps extends HTMLProps<'div'>, AngleSliderValueTextBaseProps {
}
export declare const AngleSliderValueText: ForwardRefExoticComponent<AngleSliderValueTextProps & RefAttributes<HTMLDivElement>>;
