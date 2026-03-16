import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface EditableLabelBaseProps extends PolymorphicProps {
}
export interface EditableLabelProps extends HTMLProps<'label'>, EditableLabelBaseProps {
}
export declare const EditableLabel: ForwardRefExoticComponent<EditableLabelProps & RefAttributes<HTMLLabelElement>>;
