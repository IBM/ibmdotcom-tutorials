import { UseFileUploadReturn } from './use-file-upload';
import { Provider } from 'react';
export interface UseFileUploadContext extends UseFileUploadReturn {
}
export declare const FileUploadProvider: Provider<UseFileUploadContext>, useFileUploadContext: () => UseFileUploadContext;
