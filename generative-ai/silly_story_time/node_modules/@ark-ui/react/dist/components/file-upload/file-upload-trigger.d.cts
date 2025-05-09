import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadTriggerBaseProps extends PolymorphicProps {
}
export interface FileUploadTriggerProps extends HTMLProps<'button'>, FileUploadTriggerBaseProps {
}
export declare const FileUploadTrigger: ForwardRefExoticComponent<FileUploadTriggerProps & RefAttributes<HTMLButtonElement>>;
