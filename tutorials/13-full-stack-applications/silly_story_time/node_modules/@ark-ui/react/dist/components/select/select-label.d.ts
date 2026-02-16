import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectLabelBaseProps extends PolymorphicProps {
}
export interface SelectLabelProps extends HTMLProps<'label'>, SelectLabelBaseProps {
}
export declare const SelectLabel: ForwardRefExoticComponent<SelectLabelProps & RefAttributes<HTMLLabelElement>>;
