import { DropzoneProps } from '@zag-js/file-upload';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadDropzoneBaseProps extends PolymorphicProps, DropzoneProps {
}
export interface FileUploadDropzoneProps extends HTMLProps<'div'>, FileUploadDropzoneBaseProps {
}
export declare const FileUploadDropzone: ForwardRefExoticComponent<FileUploadDropzoneProps & RefAttributes<HTMLDivElement>>;
