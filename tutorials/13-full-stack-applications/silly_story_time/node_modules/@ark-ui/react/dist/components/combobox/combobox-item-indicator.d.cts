import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxItemIndicatorBaseProps extends PolymorphicProps {
}
export interface ComboboxItemIndicatorProps extends HTMLProps<'div'>, ComboboxItemIndicatorBaseProps {
}
export declare const ComboboxItemIndicator: ForwardRefExoticComponent<ComboboxItemIndicatorProps & RefAttributes<HTMLDivElement>>;
