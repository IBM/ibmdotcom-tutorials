import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectClearTriggerBaseProps extends PolymorphicProps {
}
export interface SelectClearTriggerProps extends HTMLProps<'button'>, SelectClearTriggerBaseProps {
}
export declare const SelectClearTrigger: ForwardRefExoticComponent<SelectClearTriggerProps & RefAttributes<HTMLButtonElement>>;
