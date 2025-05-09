import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldSelectBaseProps extends PolymorphicProps {
}
export interface FieldSelectProps extends HTMLProps<'select'>, FieldSelectBaseProps {
}
export declare const FieldSelect: ForwardRefExoticComponent<FieldSelectProps & RefAttributes<HTMLSelectElement>>;
