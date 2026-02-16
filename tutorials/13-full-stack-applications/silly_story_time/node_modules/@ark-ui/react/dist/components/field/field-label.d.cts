import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldLabelBaseProps extends PolymorphicProps {
}
export interface FieldLabelProps extends HTMLProps<'label'>, FieldLabelBaseProps {
}
export declare const FieldLabel: ForwardRefExoticComponent<FieldLabelProps & RefAttributes<HTMLLabelElement>>;
