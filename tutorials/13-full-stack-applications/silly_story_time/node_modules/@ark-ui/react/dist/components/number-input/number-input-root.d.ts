import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseNumberInputProps } from './use-number-input';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface NumberInputRootBaseProps extends UseNumberInputProps, PolymorphicProps {
}
export interface NumberInputRootProps extends Assign<HTMLProps<'div'>, NumberInputRootBaseProps> {
}
export declare const NumberInputRoot: ForwardRefExoticComponent<NumberInputRootProps & RefAttributes<HTMLDivElement>>;
