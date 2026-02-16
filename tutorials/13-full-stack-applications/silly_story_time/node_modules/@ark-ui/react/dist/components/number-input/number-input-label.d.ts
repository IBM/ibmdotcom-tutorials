import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface NumberInputLabelBaseProps extends PolymorphicProps {
}
export interface NumberInputLabelProps extends HTMLProps<'label'>, NumberInputLabelBaseProps {
}
export declare const NumberInputLabel: ForwardRefExoticComponent<NumberInputLabelProps & RefAttributes<HTMLLabelElement>>;
