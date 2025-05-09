import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadItemGroupBaseProps extends PolymorphicProps {
}
export interface FileUploadItemGroupProps extends HTMLProps<'ul'>, FileUploadItemGroupBaseProps {
}
export declare const FileUploadItemGroup: ForwardRefExoticComponent<FileUploadItemGroupProps & RefAttributes<HTMLUListElement>>;
