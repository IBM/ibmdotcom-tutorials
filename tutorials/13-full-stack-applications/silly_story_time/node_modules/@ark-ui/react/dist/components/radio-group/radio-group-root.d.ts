import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseRadioGroupProps } from './use-radio-group';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RadioGroupRootBaseProps extends UseRadioGroupProps, PolymorphicProps {
}
export interface RadioGroupRootProps extends Assign<HTMLProps<'div'>, RadioGroupRootBaseProps> {
}
export declare const RadioGroupRoot: ForwardRefExoticComponent<RadioGroupRootProps & RefAttributes<HTMLDivElement>>;
