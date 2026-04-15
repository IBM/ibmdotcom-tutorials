import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface EditableControlBaseProps extends PolymorphicProps {
}
export interface EditableControlProps extends HTMLProps<'div'>, EditableControlBaseProps {
}
export declare const EditableControl: ForwardRefExoticComponent<EditableControlProps & RefAttributes<HTMLDivElement>>;
