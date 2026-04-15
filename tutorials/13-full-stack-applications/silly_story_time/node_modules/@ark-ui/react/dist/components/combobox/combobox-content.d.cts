import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxContentBaseProps extends PolymorphicProps {
}
export interface ComboboxContentProps extends HTMLProps<'div'>, ComboboxContentBaseProps {
}
export declare const ComboboxContent: ForwardRefExoticComponent<ComboboxContentProps & RefAttributes<HTMLDivElement>>;
