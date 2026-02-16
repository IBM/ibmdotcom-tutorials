import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DialogCloseTriggerBaseProps extends PolymorphicProps {
}
export interface DialogCloseTriggerProps extends HTMLProps<'button'>, DialogCloseTriggerBaseProps {
}
export declare const DialogCloseTrigger: ForwardRefExoticComponent<DialogCloseTriggerProps & RefAttributes<HTMLButtonElement>>;
