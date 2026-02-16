import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as fileUpload from '@zag-js/file-upload';
export interface UseFileUploadProps extends Optional<Omit<fileUpload.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseFileUploadReturn extends fileUpload.Api<PropTypes> {
}
export declare const useFileUpload: (props?: UseFileUploadProps) => UseFileUploadReturn;
