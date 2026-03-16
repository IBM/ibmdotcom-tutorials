import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface EditableSubmitTriggerBaseProps extends PolymorphicProps {
}
export interface EditableSubmitTriggerProps extends HTMLProps<'button'>, EditableSubmitTriggerBaseProps {
}
export declare const EditableSubmitTrigger: ForwardRefExoticComponent<EditableSubmitTriggerProps & RefAttributes<HTMLButtonElement>>;
