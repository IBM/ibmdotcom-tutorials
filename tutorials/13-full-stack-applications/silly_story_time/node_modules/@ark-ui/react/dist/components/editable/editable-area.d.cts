import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface EditableAreaBaseProps extends PolymorphicProps {
}
export interface EditableAreaProps extends HTMLProps<'div'>, EditableAreaBaseProps {
}
export declare const EditableArea: ForwardRefExoticComponent<EditableAreaProps & RefAttributes<HTMLDivElement>>;
