import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadItemDeleteTriggerBaseProps extends PolymorphicProps {
}
export interface FileUploadItemDeleteTriggerProps extends HTMLProps<'button'>, FileUploadItemDeleteTriggerBaseProps {
}
export declare const FileUploadItemDeleteTrigger: ForwardRefExoticComponent<FileUploadItemDeleteTriggerProps & RefAttributes<HTMLButtonElement>>;
