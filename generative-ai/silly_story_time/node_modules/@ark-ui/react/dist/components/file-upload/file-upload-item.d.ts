import { ItemProps } from '@zag-js/file-upload';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadItemBaseProps extends ItemProps, PolymorphicProps {
}
export interface FileUploadItemProps extends HTMLProps<'li'>, FileUploadItemBaseProps {
}
export declare const FileUploadItem: ForwardRefExoticComponent<FileUploadItemProps & RefAttributes<HTMLLIElement>>;
