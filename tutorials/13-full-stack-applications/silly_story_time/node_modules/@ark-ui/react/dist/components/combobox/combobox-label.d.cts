import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxLabelBaseProps extends PolymorphicProps {
}
export interface ComboboxLabelProps extends HTMLProps<'label'>, ComboboxLabelBaseProps {
}
export declare const ComboboxLabel: ForwardRefExoticComponent<ComboboxLabelProps & RefAttributes<HTMLLabelElement>>;
