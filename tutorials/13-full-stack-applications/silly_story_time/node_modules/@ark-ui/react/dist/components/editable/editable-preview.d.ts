import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface EditablePreviewBaseProps extends PolymorphicProps {
}
export interface EditablePreviewProps extends HTMLProps<'span'>, EditablePreviewBaseProps {
}
export declare const EditablePreview: ForwardRefExoticComponent<EditablePreviewProps & RefAttributes<HTMLSpanElement>>;
