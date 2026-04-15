import { HTMLProps, PolymorphicProps } from '../factory';
import { UseFileUploadProps } from './use-file-upload';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadRootBaseProps extends UseFileUploadProps, PolymorphicProps {
}
export interface FileUploadRootProps extends HTMLProps<'div'>, FileUploadRootBaseProps {
}
export declare const FileUploadRoot: ForwardRefExoticComponent<FileUploadRootProps & RefAttributes<HTMLDivElement>>;
