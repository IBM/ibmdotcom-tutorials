import { FileMimeType } from '@zag-js/file-utils';
import { MaybePromise } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export type DownloadableData = string | Blob | File;
export interface DownloadTriggerBaseProps extends PolymorphicProps {
    /**
     * The name of the file to download
     */
    fileName: string;
    /**
     * The data to download
     */
    data: DownloadableData | (() => MaybePromise<DownloadableData>);
    /**
     * The MIME type of the data to download
     */
    mimeType: FileMimeType;
}
export interface DownloadTriggerProps extends HTMLProps<'button'>, DownloadTriggerBaseProps {
}
export declare const DownloadTrigger: ForwardRefExoticComponent<DownloadTriggerProps & RefAttributes<HTMLButtonElement>>;
