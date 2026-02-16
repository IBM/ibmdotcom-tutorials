import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface NumberInputIncrementTriggerBaseProps extends PolymorphicProps {
}
export interface NumberInputIncrementTriggerProps extends HTMLProps<'button'>, NumberInputIncrementTriggerBaseProps {
}
export declare const NumberInputIncrementTrigger: ForwardRefExoticComponent<NumberInputIncrementTriggerProps & RefAttributes<HTMLButtonElement>>;
