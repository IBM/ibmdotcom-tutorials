import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface EditableCancelTriggerBaseProps extends PolymorphicProps {
}
export interface EditableCancelTriggerProps extends HTMLProps<'button'>, EditableCancelTriggerBaseProps {
}
export declare const EditableCancelTrigger: ForwardRefExoticComponent<EditableCancelTriggerProps & RefAttributes<HTMLButtonElement>>;
