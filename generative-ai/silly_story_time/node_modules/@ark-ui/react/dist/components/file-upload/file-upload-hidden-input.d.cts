import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadHiddenInputBaseProps extends PolymorphicProps {
}
export interface FileUploadHiddenInputProps extends HTMLProps<'input'>, FileUploadHiddenInputBaseProps {
}
export declare const FileUploadHiddenInput: ForwardRefExoticComponent<FileUploadHiddenInputProps & RefAttributes<HTMLInputElement>>;
