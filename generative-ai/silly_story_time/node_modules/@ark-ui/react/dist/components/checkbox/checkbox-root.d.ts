import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseCheckboxProps } from './use-checkbox';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CheckboxRootBaseProps extends UseCheckboxProps, PolymorphicProps {
}
export interface CheckboxRootProps extends Assign<HTMLProps<'label'>, CheckboxRootBaseProps> {
}
export declare const CheckboxRoot: ForwardRefExoticComponent<CheckboxRootProps & RefAttributes<HTMLLabelElement>>;
