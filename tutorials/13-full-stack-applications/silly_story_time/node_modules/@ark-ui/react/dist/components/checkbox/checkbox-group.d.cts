import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseCheckboxGroupProps } from './use-checkbox-group';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CheckboxGroupBaseProps extends UseCheckboxGroupProps, PolymorphicProps {
}
export interface CheckboxGroupProps extends Assign<HTMLProps<'div'>, CheckboxGroupBaseProps> {
}
export declare const CheckboxGroup: ForwardRefExoticComponent<CheckboxGroupProps & RefAttributes<HTMLDivElement>>;
