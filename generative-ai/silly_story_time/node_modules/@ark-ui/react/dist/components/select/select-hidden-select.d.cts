import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectHiddenSelectBaseProps extends PolymorphicProps {
}
export interface SelectHiddenSelectProps extends HTMLProps<'select'>, SelectHiddenSelectBaseProps {
}
export declare const SelectHiddenSelect: ForwardRefExoticComponent<SelectHiddenSelectProps & RefAttributes<HTMLSelectElement>>;
