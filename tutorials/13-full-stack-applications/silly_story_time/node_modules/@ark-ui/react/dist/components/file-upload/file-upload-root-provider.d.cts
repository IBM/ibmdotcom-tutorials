import { HTMLProps, PolymorphicProps } from '../factory';
import { UseFileUploadReturn } from './use-file-upload';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseFileUploadReturn;
}
export interface FileUploadRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface FileUploadRootProviderProps extends HTMLProps<'div'>, FileUploadRootProviderBaseProps {
}
export declare const FileUploadRootProvider: ForwardRefExoticComponent<FileUploadRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
