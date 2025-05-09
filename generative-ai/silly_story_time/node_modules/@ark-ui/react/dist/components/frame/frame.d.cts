import { Assign } from '../../types';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FrameBaseProps {
    /** Additional content to be inserted into the frame's <head> */
    head?: React.ReactNode;
    /** Callback function to be executed when the frame is mounted */
    onMount?: () => void;
    /** Callback function to be executed when the frame is unmounted */
    onUnmount?: () => void;
}
export interface FrameProps extends Assign<React.IframeHTMLAttributes<HTMLIFrameElement>, FrameBaseProps> {
}
export declare const Frame: ForwardRefExoticComponent<FrameProps & RefAttributes<HTMLIFrameElement>>;
