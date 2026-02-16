import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadLabelBaseProps extends PolymorphicProps {
}
export interface FileUploadLabelProps extends HTMLProps<'label'>, FileUploadLabelBaseProps {
}
export declare const FileUploadLabel: ForwardRefExoticComponent<FileUploadLabelProps & RefAttributes<HTMLLabelElement>>;
