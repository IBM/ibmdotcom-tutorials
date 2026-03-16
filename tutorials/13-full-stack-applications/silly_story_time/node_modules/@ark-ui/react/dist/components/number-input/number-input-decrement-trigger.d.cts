import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface NumberInputDecrementTriggerBaseProps extends PolymorphicProps {
}
export interface NumberInputDecrementTriggerProps extends HTMLProps<'button'>, NumberInputDecrementTriggerBaseProps {
}
export declare const NumberInputDecrementTrigger: ForwardRefExoticComponent<NumberInputDecrementTriggerProps & RefAttributes<HTMLButtonElement>>;
