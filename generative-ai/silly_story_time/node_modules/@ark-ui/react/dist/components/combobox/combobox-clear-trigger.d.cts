import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxClearTriggerBaseProps extends PolymorphicProps {
}
export interface ComboboxClearTriggerProps extends HTMLProps<'button'>, ComboboxClearTriggerBaseProps {
}
export declare const ComboboxClearTrigger: ForwardRefExoticComponent<ComboboxClearTriggerProps & RefAttributes<HTMLButtonElement>>;
