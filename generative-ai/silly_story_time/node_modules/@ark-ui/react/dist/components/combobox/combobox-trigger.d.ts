import { TriggerProps } from '@zag-js/combobox';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxTriggerBaseProps extends TriggerProps, PolymorphicProps {
}
export interface ComboboxTriggerProps extends HTMLProps<'button'>, ComboboxTriggerBaseProps {
}
export declare const ComboboxTrigger: ForwardRefExoticComponent<ComboboxTriggerProps & RefAttributes<HTMLButtonElement>>;
