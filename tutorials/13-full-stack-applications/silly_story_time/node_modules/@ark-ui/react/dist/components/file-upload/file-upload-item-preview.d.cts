import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadItemPreviewBaseProps extends PolymorphicProps {
    /**
     * The file type to match against. Matches all file types by default.
     * @default '.*'
     */
    type?: string;
}
export interface FileUploadItemPreviewProps extends HTMLProps<'div'>, FileUploadItemPreviewBaseProps {
}
export declare const FileUploadItemPreview: ForwardRefExoticComponent<FileUploadItemPreviewProps & RefAttributes<HTMLImageElement>>;
