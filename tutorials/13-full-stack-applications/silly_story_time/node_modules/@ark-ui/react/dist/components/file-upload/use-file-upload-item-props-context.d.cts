import { ItemProps } from '@zag-js/file-upload';
import { Provider } from 'react';
export interface UseFileUploadItemContext extends ItemProps {
}
export declare const FileUploadItemPropsProvider: Provider<UseFileUploadItemContext>, useFileUploadItemPropsContext: () => UseFileUploadItemContext;
