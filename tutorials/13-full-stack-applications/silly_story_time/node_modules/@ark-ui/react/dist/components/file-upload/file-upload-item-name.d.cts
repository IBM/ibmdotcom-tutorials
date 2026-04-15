import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadItemNameBaseProps extends PolymorphicProps {
}
export interface FileUploadItemNameProps extends HTMLProps<'div'>, FileUploadItemNameBaseProps {
}
export declare const FileUploadItemName: ForwardRefExoticComponent<FileUploadItemNameProps & RefAttributes<HTMLDivElement>>;
