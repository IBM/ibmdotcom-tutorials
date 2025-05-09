import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxListBaseProps extends PolymorphicProps {
}
export interface ComboboxListProps extends HTMLProps<'div'>, ComboboxListBaseProps {
}
export declare const ComboboxList: ForwardRefExoticComponent<ComboboxListProps & RefAttributes<HTMLDivElement>>;
