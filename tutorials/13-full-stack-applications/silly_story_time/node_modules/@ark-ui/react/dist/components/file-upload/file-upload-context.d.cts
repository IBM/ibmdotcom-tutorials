import { ReactNode } from 'react';
import { UseFileUploadContext } from './use-file-upload-context';
export interface FileUploadContextProps {
    children: (context: UseFileUploadContext) => ReactNode;
}
export declare const FileUploadContext: (props: FileUploadContextProps) => ReactNode;
