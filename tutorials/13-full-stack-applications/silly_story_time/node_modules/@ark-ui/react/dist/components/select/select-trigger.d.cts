import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectTriggerBaseProps extends PolymorphicProps {
}
export interface SelectTriggerProps extends HTMLProps<'button'>, SelectTriggerBaseProps {
}
export declare const SelectTrigger: ForwardRefExoticComponent<SelectTriggerProps & RefAttributes<HTMLButtonElement>>;
