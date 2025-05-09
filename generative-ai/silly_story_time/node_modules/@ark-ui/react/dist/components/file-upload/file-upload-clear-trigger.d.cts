import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FileUploadClearTriggerBaseProps extends PolymorphicProps {
}
export interface FileUploadClearTriggerProps extends HTMLProps<'button'>, FileUploadClearTriggerBaseProps {
}
export declare const FileUploadClearTrigger: ForwardRefExoticComponent<FileUploadClearTriggerProps & RefAttributes<HTMLButtonElement>>;
