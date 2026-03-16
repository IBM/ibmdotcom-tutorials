import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface EditableInputBaseProps extends PolymorphicProps {
}
export interface EditableInputProps extends HTMLProps<'input'>, EditableInputBaseProps {
}
export declare const EditableInput: ForwardRefExoticComponent<EditableInputProps & RefAttributes<HTMLInputElement>>;
