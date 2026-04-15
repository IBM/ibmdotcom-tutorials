import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface EditableEditTriggerBaseProps extends PolymorphicProps {
}
export interface EditableEditTriggerProps extends HTMLProps<'button'>, EditableEditTriggerBaseProps {
}
export declare const EditableEditTrigger: ForwardRefExoticComponent<EditableEditTriggerProps & RefAttributes<HTMLButtonElement>>;
