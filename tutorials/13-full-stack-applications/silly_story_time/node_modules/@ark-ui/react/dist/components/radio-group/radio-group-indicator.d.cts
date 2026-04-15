import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RadioGroupIndicatorBaseProps extends PolymorphicProps {
}
export interface RadioGroupIndicatorProps extends HTMLProps<'div'>, RadioGroupIndicatorBaseProps {
}
export declare const RadioGroupIndicator: ForwardRefExoticComponent<RadioGroupIndicatorProps & RefAttributes<HTMLDivElement>>;
