import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadItemPreviewImageBaseProps extends PolymorphicProps {
}
export interface FileUploadItemPreviewImageProps extends HTMLProps<'img'>, FileUploadItemPreviewImageBaseProps {
}
export declare const FileUploadItemPreviewImage: ForwardRefExoticComponent<FileUploadItemPreviewImageProps & RefAttributes<HTMLImageElement>>;
